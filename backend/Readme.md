#### Özet (Akış Şeması Gibi):

1. Route: /apartman/daire/5 →

2. Middleware: Güvenlik kontrolü →

3. Controller: Ev sahibiyle iletişim kur ve işlem yap.

#### Summary (Flowchart Like):

1. Route: /apartment/apartment/5 →

2. Middleware: Security control →

3. Controller: Communicate with the host and perform operations.

#### Zusammenfassung (ähnlich einem Flussdiagramm):

1. Route: /apartment/apartment/5 →

2. Middleware: Sicherheitskontrolle →

3. Controller: Kommunikation mit dem Host und Ausführung von Operationen.

todo-backend/
│
├── server.js ---------------→ Express sunucusu
├── routes/
│ └── todos.js --------------→ Todo rotaları
│ └── authRoutes.js
├── middleware/
│ └── authMiddleware.js -----→ Basit güvenlik middleware'i
├── controllers/
│ └── todoController.js -----→ İş mantığı
├── data/
│ └── todo.json ----------→ Görevlerin tutulduğu dosya
│ └── authController.js
├── test
│ └── .rest -----------------→ Test
└── package.json
