import path from "path";
import { promises as fs, readFileSync } from "fs";
import * as cheerio from "cheerio";
import prettier from "prettier";
import cc from "camelcase";
import { optimize } from "svgo";

const rootDir = path.resolve();
const IconsDir = path.join(rootDir, "public", "icons");
const packageDir = path.join(rootDir, "src", "icons");

const format = async (text: string) =>
  prettier.format(text, {
    parser: "typescript",
    singleQuote: true,
  });

const generateReactComponents = async () => {
  const categories = await fs.readdir(IconsDir);
  await fs.mkdir(packageDir, { recursive: true });
  await fs.writeFile(path.join(packageDir, "index.ts"), "", "utf-8");

  for (const category of categories) {
    const categoryPath = path.join(IconsDir, category);
    const icons = await fs.readdir(categoryPath);

    const componentDir = path.join(packageDir, category);
    await fs.mkdir(componentDir, { recursive: true });
    const seenIconNames = new Set<string>();

    for (const icon of icons) {
      let iconName = cc(icon.replace(".svg", "")).replace(
        /(^\w|\s+\w)/g,
        (match) => match.trim().toUpperCase()
      );

      if (/^\d/.test(iconName)) {
        iconName = `Icon${iconName}`;
      }

      const filePath = path.join(categoryPath, icon);
      const svgContent = readFileSync(filePath, "utf-8");
      let originalIconName = iconName;
      let counter = 1;
      while (seenIconNames.has(iconName)) {
        iconName = `${originalIconName}${counter}`;
        counter++;
      }
      seenIconNames.add(iconName);

      const { data: optimizedSvg } = optimize(svgContent, {
        path: filePath,
      });

      const $ = cheerio.load(optimizedSvg);
      const svgElement = $("svg").html();

      const componentContent = `
        import React, { forwardRef, SVGProps } from 'react';

        interface ${iconName}Props extends SVGProps<SVGSVGElement> {
          variant?: string;
          color?: string;
          size?: string | number;
          className?: string;
        }

        const ${iconName} = forwardRef<SVGSVGElement, ${iconName}Props>(
          ({ variant, color = 'currentColor', size = 24, className, ...rest }, ref) => {
            return (
              <svg
                ref={ref}
                className={className}
                width={size}
                height={size}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                {...rest}
              >
                ${svgElement
                  ?.replace(/fill="[^"]*"/g, `fill={color}`)
                  .replace(/stroke="[^"]*"/g, `stroke={color}`)}
              </svg>
            );
          }
        );

        ${iconName}.defaultProps = {
          variant: 'Linear',
          color: 'currentColor',
          size: 24,
        };

        export default ${iconName};
      `;

      const formattedComponent = await format(componentContent);

      await fs.writeFile(
        path.join(componentDir, `${iconName}.tsx`),
        formattedComponent,
        "utf-8"
      );

      const exportString = `export { default as ${iconName} } from './${category}/${iconName}';\n`;
      await fs.appendFile(
        path.join(packageDir, "index.ts"),
        exportString,
        "utf-8"
      );
    }
  }
};

generateReactComponents().catch(console.error);
