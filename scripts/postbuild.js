import fs from 'fs/promises';
import path from 'path';

async function buildThemeCss() {
  try {
    const frontmatterPath = path.resolve('style-settings-frontmatter.yml');
    const cssPath = path.resolve('dist/theme.css');
    const outPath = path.resolve('theme.css');

    const [frontmatter, css] = await Promise.all([
      fs.readFile(frontmatterPath, 'utf8'),
      fs.readFile(cssPath, 'utf8'),
    ]);

    await fs.writeFile(outPath, `${frontmatter}\n${css}`);
    console.log('theme.css built with Style Settings frontmatter.');
  } catch (err) {
    console.error('Failed to build theme.css:', err);
    process.exit(1);
  }
}

buildThemeCss();
