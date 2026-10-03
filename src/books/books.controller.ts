import { Controller,Get, Post, Param, Put,Delete, Body } from '@nestjs/common';
import { BooksService } from './books.service.js';
import { CreateBookDto } from './dto/create-book.dto.js';
//controller hanya menerima req dan memberikan respon,jd suatu ketergantungan misalkan kendaraan untuk berangkat

@Controller('books') //dekorator, dibaca sebagai route path, jadi semua route di controller ini akan diawali dengan /books
export class BooksController {
    constructor(private readonly booksService:BooksService){} //sangat tergantung dengan service krna mengambil file dari situ

    @Get()
    getBooks(){
        return this.booksService.findAll(); //memanggil fungsi findall yang ada dibooks service untuk menampilkan semua data buku
    }
    
    //menambahkan data buku baru
    @Post()
    createBook(@Body() createBookDto: CreateBookDto){
        return this.booksService.create(createBookDto); //memanggil fungsi create yang ada dibooks service untuk menambahkan data buku baru
    }

    //menambahkan atau memanggil data buku baru berdasarkan id
    @Get(':id')
getBookById(@Param('id') id: string) {
  return this.booksService.findById(id);
}

    //update data buku
    @Put(':id')
    putById(@Param(`id`)id:string) : string{
        return `update data buku dengan id ${id}`;
    }

    //hapus data buku
    @Delete(`id`)
    deleteById(@Param(`id`)id:string): string{
        return `hapus data buku dengan id ${id}`;
    }
}
