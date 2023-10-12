# 試一下 Next.js 13
Next.js 13 與 12 大版有大幅度的變更。想試看看差多少結果真的變很多。留存記錄一下。   
ref→[Learn Next.js 13 With This One Project](https://www.youtube.com/watch?v=NgayZAuTgwM&ab_channel=WebDevSimplified)   

# 手札
### VS Code 插件安裝
開發環境：Visual Studio Code   
`PostCSS Language Support`、`Tailwind CSS IntelliSense`

### 初始安裝 next app
```
npx create-next-app@latest .  
npm run dev    //------ 開發與 debug
```

### 安裝 sqlite ORM 模組
```
npm i prisma --save-dev   
npx prisma init --datasource-provider sqlite
npx prisma migrate dev --name init    //------ 依據 schema.prisma 同步 ORM
```

### 設定 ORM model - `./schema.prisma`
```
model Todo {
  id        String @id @default(uuid())
  title     String
  complete  Boolean
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```



