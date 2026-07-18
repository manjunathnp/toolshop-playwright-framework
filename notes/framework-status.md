toolshop-playwright-framework/
│
├── tests/
│   ├── ui/
│   │   ├── auth/                          ⏳
│   │   ├── catalog/                       ⏳
│   │   ├── cart/                          ⏳
│   │   ├── checkout/                      ⏳
│   │   └── account/                       ⏳
│   ├── api/
│   │   ├── auth/                          ⏳
│   │   ├── products/                      ⏳
│   │   ├── cart/                          ⏳
│   │   └── users/                         ⏳
│   ├── e2e-cross-validation/              ⏳
│   └── example.spec.ts                    ✅ (default, to be removed later)
│
├── pages/
│   ├── LoginPage.ts                       ✅
│   ├── BasePage.ts                        ⏳
│   ├── RegisterPage.ts                    ⏳
│   ├── HomePage.ts                        ⏳
│   ├── ProductPage.ts                     ⏳
│   ├── CatalogPage.ts                     ⏳
│   ├── CartPage.ts                        ⏳
│   ├── CheckoutPage.ts                    ⏳
│   └── AccountPage.ts                     ⏳
│
├── api-clients/
│   ├── BaseApiClient.ts                   ⏳
│   ├── AuthApiClient.ts                   ⏳
│   ├── ProductsApiClient.ts               ⏳
│   ├── CartApiClient.ts                   ⏳
│   └── UsersApiClient.ts                  ⏳
│
├── fixtures/
│   ├── index.ts                           ⏳
│   ├── auth.fixture.ts                    ⏳
│   ├── apiAuth.fixture.ts                 ⏳
│   ├── testData.fixture.ts                ⏳
│   └── cleanup.fixture.ts                 ⏳
│
├── utils/
│   ├── dataGenerator.ts                   ⏳
│   ├── assertions.ts                      ⏳
│   └── constants.ts                       ⏳
│
├── test-data/
│   ├── staticUsers.ts                     ⏳
│   └── types.ts                           ⏳
│
├── notes/
│   ├── 01-env-baseurl-setup.md            ✅
│   └── framework-scaffold.md              ✅
│
├── learning-log/
│   └── session-log.md                     ✅ (private, gitignored)
│
├── .github/
│   └── workflows/
│       └── playwright.yml                 ✅
│
├── .env                                   ✅ (gitignored)
├── .env.example                           ✅
├── .gitignore                             ✅
├── package.json                           ✅
├── package-lock.json                      ✅
├── playwright.config.ts                   ✅
├── tsconfig.json                          ✅
└── README.md                              ⏳