import { Meta, Story } from '@storybook/angular';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideMockStore } from '@ngrx/store/testing';

import { MovieListComponent } from './movie-list.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from '../../../services/auth.service';


export default {
  title: 'ListMovie',
  component: MovieListComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;
const Template: Story<MovieListComponent> = (args: MovieListComponent) => ({
  component: MovieListComponent,
  template: `<app-movie-list></app-movie-list>`,
  styles: ['./movie-list.component.scss'],
  moduleMetadata: {
    imports: [
      RouterTestingModule.withRoutes([]),
      FormsModule,
       HttpClientModule,
      ReactiveFormsModule,
    ],
    declarations: [MovieListComponent],
    providers: [provideMockStore(), AuthService],
  },
  props: args,
});

export const List = Template.bind({});
List.args = {
  listmovie : true,
};





 