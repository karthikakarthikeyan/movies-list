import { Meta, Story } from '@storybook/angular';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideMockStore } from '@ngrx/store/testing';

import { MovieEditComponent } from './movie-edit.component';
import { HttpClientModule } from '@angular/common/http';
import { MovieService } from '../../services/movie.service';


export default {
  title: 'Movie',
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

export const editmovie = Template.bind({});
editmovie.args = {
  editmovies : true,
};

