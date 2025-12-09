# SEvent API Documentation

API Documentation cho ứng dụng quản lý sự kiện SEvent.

## 🚀 Deployment

### Deploy lên Vercel

1. Install Vercel CLI (nếu chưa có):
```bash
npm install -g vercel
```

2. Login vào Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```

Hoặc deploy production:
```bash
vercel --prod
```

### Truy cập

Sau khi deploy, bạn sẽ nhận được URL như:
- `https://sevent-doc.vercel.app`

## 📝 Local Development

1. Install dependencies:
```bash
npm install
```

2. Copy Swagger UI files:
```bash
cp node_modules/swagger-ui-dist/* public/
```

3. Mở `public/index.html` trong browser

## 📚 Documentation

API documentation được viết theo OpenAPI 3.0 specification trong file `public/openapi.yaml`

### Tags:
- **Authentication** - Đăng ký & đăng nhập
- **Events** - CRUD events, like, save, trending
- **Reminders** - Quản lý nhắc nhở sự kiện
- **Saved Events** - Quản lý events đã lưu và folders
- **Users** - Quản lý users và roles
- **Categories** - Quản lý danh mục
- **User Profile** - Xem thông tin profile
- **Cron Jobs** - Endpoints cho external cron service

## 🔗 Links

- Backend API: `https://your-backend-url.com/api`
- Documentation: Deployed URL sau khi deploy
