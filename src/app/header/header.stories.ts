import { Meta, Story } from '@storybook/angular';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideMockStore } from '@ngrx/store/testing';
 
import { HeaderComponent } from './header.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
 
export default {
  title: 'Header',
  component: HeaderComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;
const Template: Story<HeaderComponent> = (args: HeaderComponent) => ({
  component: HeaderComponent,
  template: `<app-header></app-header>`,
  styles: ['./header.component.scss'],
  moduleMetadata: {
    imports: [
      RouterTestingModule.withRoutes([]),
      FormsModule,
       HttpClientModule, 
      ReactiveFormsModule,
    ],
    declarations: [HeaderComponent],
    providers: [provideMockStore(), AuthService],
  },
  props: args,
});

export const Header = Template.bind({});
Header.args = {
  viewHeader : true,
};