# bookshelf_api_dicoding
Aplikasi RESTful API bookshelf by prasetyomuhdwi

Saya mengunakan prinsip single responsibility approach. yang artinya mengunakan satu berkas JavaScript untuk satu tujuan saja.

#### Rincian
server.js : Memuat kode untuk membuat, mengonfigurasi, dan menjalankan server HTTP menggunakan Hapi.
routes.js : Memuat kode konfigurasi routing server seperti menentukan path, method, dan handler yang digunakan.
handler.js : Memuat seluruh fungsi-fungsi handler yang digunakan pada berkas routes.
books.js : Memuat data books yang disimpan dalam bentuk array objek.

#### Struktur project
```
bookshelf_api_dicoding
├── node_modules
├── src
│ ├── handler.js
│ ├── books.js
│ ├── routes.js
│ └── server.js
├── .eslintrc.json
├── .gitignore
├── package-lock.json
├── package.json
└── README.md
```