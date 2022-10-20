## 준비

- corepack 활성화
    ```bash
    corepack enable
    ```

- yarn 설치
    ```bash
    yarn --version
    ```

- solc 설치
    ```bash
    yarn add solc@0.8.7-fixed
    ```

- package.json complie 설정
    ```
    "scripts": {
    "compile": "yarn solcjs --bin --abi --include-path node_modules/ --base-path . -o . SimpleStorage.sol"
    }
    ```

- ethers 설치
    ```bash
    yarn add ethers
    ```

- fs 모듈 설치
    ```bash
    yarn add fa-extra
    ```

- dotenv 설치
    ```bash
    yarn add dotenv
    ```
-  prettier-plugin-solidity 설치
    ```bash
    yarn add prettier prettier-plugin-solidity  
    ```

