### npx和npm、pnpm以及cnpm 还有yarn有什么区别



+ npm 是 Node.js 官方提供的默认包管理工具。
它是 Node.js 安装时自动包含的，无需单独安装。
npm 允许你通过 npm install 命令安装依赖项，它将从 npm 的注册表（npmjs.com）下载和安装包。
npm 在默认情况下使用单独的 node_modules 目录安装项目的依赖项。
使用 npm，你可以运行脚本、发布自己的包和管理依赖项。

+ npx（Node Package Execute）: npx 是 npm 5.2.0 版本之后自带的工具。
它用于在本地执行包，而无需全局安装。
当你想要运行一个不在全局环境下安装的包时，可以使用 npx 来运行该包。例如：npx create-react-app my-app。
npx 会临时将包安装到一个缓存目录中，并在运行后自动清理。

+ pnpm: pnpm 是另一个 Node.js 包管理工具。
与 npm 不同，pnpm 采用了一种符号链接的方式来管理依赖项，它可以将相同的包只安装一次，并在不同项目之间共享。
这样可以节省磁盘空间，并提供更快的安装速度，因为它不会重复下载和存储相同的包。
pnpm 使用 node_modules/.pnpm 目录来存储共享的包。

+ cnpm（淘宝 NPM）:cnpm 是由淘宝团队提供的 NPM 镜像，用于替代 npm 的默认源，加速包的下载速度。
cnpm 和 npm 的命令行用法基本一样，但它会连接到淘宝的镜像地址，从而提供更快的下载速度。
可以通过运行 npm install -g cnpm 来全局安装 cnpm。

+ yarn:yarn 是由 Facebook 提供的另一种包管理工具。
它与 npm 功能类似，用于安装依赖项、运行脚本、发布包等。
yarn 在安装依赖项时使用了并行下载和缓存，因此在某些情况下可能比 npm 更快。
yarn 使用 yarn.lock 文件来确保每次安装的包版本一致性，而 npm 使用 package-lock.json 文件。