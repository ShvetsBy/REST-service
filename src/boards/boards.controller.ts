import { Controller, Body, Param, Delete, Get, Post, Put } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { CreateBoardDto } from './dto/createboard.dto';
import { UpdateBoardDto } from './dto/updateboard.dto'

@Controller('boards')
export class BoardsController {

    constructor(private readonly boardService: BoardsService) {}

    @Post()
    create(@Body() createBoardDto: CreateBoardDto) {
      return this.boardService.create(createBoardDto);
    }
    
    @Get()
    findAll() {
     return this.boardService.findAll();
    }
  
    @Get(':id')
    findOne(@Param('id') id: string) {
      return this.boardService.findOne(id);
    }
  
    @Put(':id')
    update(@Param('id') id: string, @Body() updateBoardDto: UpdateBoardDto) {
    return this.boardService.update(id, updateBoardDto);
    }
  
    @Delete(':id')
    remove(@Param('id') id: string) {
    return this.boardService.remove(id);
    }

}
