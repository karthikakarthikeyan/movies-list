import { Meta, Story } from '@storybook/angular';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideMockStore } from '@ngrx/store/testing';

import { MovieEditComponent } from './movie-edit.component';
import { HttpClientModule } from '@angular/common/http';
import { MovieService } from '../../services/movie.service';


export default {
  title: 'EditMovie',
  component: MovieEditComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;
const Template: Story<MovieEditComponent> = (args: MovieEditComponent) => ({
  component: MovieEditComponent,
  template: `<app-movie-edit></app-movie-edit>`,
  styles: ['./movie-edit.component.scss'],
  moduleMetadata: {
    imports: [
      RouterTestingModule.withRoutes([]),
      FormsModule,
       HttpClientModule,
      ReactiveFormsModule,
    ],
    declarations: [MovieEditComponent],
    providers: [provideMockStore(), MovieService],
  },
  props: args,
});

export const Form = Template.bind({});
Form.args = {
  editmovies : true,
};

