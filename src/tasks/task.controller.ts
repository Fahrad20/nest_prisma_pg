import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  UsePipes,
  ValidationPipe
} from '@nestjs/common';
import { TaskDto } from './task.dto';
import { TaskService } from './task.service';

@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  getAll() {
    return this.taskService.getAll();
  }

  @Post()
  @UsePipes(new ValidationPipe())
  create(@Body() dto: TaskDto) {
    return this.taskService.create(dto);
  }

  @Patch(':id')
  toggleDone(@Param('id') id: string) {
    return this.taskService.toggleDone(id);
  }
}
