import { Meta, Story } from '@storybook/angular';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideMockStore } from '@ngrx/store/testing';
 
import { SignUpComponent } from './sign-up.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';
 
export default {
  title: 'Header',
  component: SignUpComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;
const Template: Story<SignUpComponent> = (args: SignUpComponent) => ({
  component: SignUpComponent,
  template: `<app-sign-up></app-sign-up>`,
  styles: ['./sign-up.component.scss'],
  moduleMetadata: {
    imports: [
      RouterTestingModule.withRoutes([]),
      FormsModule,
       HttpClientModule, 
      ReactiveFormsModule,
    ],
    declarations: [SignUpComponent],
    providers: [provideMockStore(),AuthService],
  },
  props: args,
});
 
export const Signup = Template.bind({});
Signup.args = {
  viewsignup : true,
};
