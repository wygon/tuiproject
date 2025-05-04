import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, FloatingLabel, FormControl, FormGroup, FormLabel } from "react-bootstrap";
import { Form } from "react-bootstrap";

export default function () {
  return (
    <div className='w-50 d-flex justify-content-center border-1'>
      <Form>
        <FloatingLabel controlId="floatNickname" label="Nickname">
          <FormControl type="text" placeholder=""></FormControl>
        </FloatingLabel>
        <FloatingLabel controlId="floatName" label="Name">
          <FormControl type="text" placeholder=""></FormControl>
        </FloatingLabel>
        <FloatingLabel controlId="floatSurname" label="Surname">
          <FormControl type="text" placeholder=""></FormControl>
        </FloatingLabel>
        <FloatingLabel controlId="floatEmail" label="Email">
          <FormControl type="email" placeholder=""></FormControl>
        </FloatingLabel>
        <FloatingLabel controlId="floatEmailConfirm" label="Confirm email">
          <FormControl type="email" placeholder=""></FormControl>
        </FloatingLabel>
        <FloatingLabel controlId="floatPassword" label="Password">
          <FormControl type="password" placeholder=""></FormControl>
        </FloatingLabel>
        <FloatingLabel controlId="floatPasswordConfirm" label="Confirm password">
          <FormControl type="password" placeholder=""></FormControl>
        </FloatingLabel>
        <FloatingLabel controlId="floatPhone" label="Phone">
          <FormControl type="number" placeholder=""></FormControl>
        </FloatingLabel>
        <Button type="submit">Submit</Button>
      </Form>

    </div>
  )
}
