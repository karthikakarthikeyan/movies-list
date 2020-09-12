import { Meta, Story } from '@storybook/angular';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideMockStore } from '@ngrx/store/testing';
 
import { MovieAddComponent } from './movie-add.component';
import { HttpClientModule } from '@angular/common/http';
import { MovieService } from '../../services/movie.service';
 
export default {
  title: 'AddMovie',
  component: MovieAddComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;
const Template: Story<MovieAddComponent> = (args: MovieAddComponent) => ({
  component: MovieAddComponent,
  template: `<app-movie-add></app-movie-add>`,
  styles: ['./movie-add.component.scss'],
  moduleMetadata: {
    imports: [
      RouterTestingModule.withRoutes([]),
      FormsModule,
       HttpClientModule,
      ReactiveFormsModule,
    ],
    declarations: [MovieAddComponent],
    providers: [provideMockStore(), MovieService],
  },
  props: args,
});
 
export const Form = Template.bind({});
Form.args = {
  addmovies : true,
};