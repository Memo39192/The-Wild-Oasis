import { useState } from 'react';
import Button from '../../ui/Button';
import Form from '../../ui/Form';
import FormRowVertical from '../../ui/FormRowVertical';
import Input from '../../ui/Input';
import { useLogin } from './useLogin';
import SpinnerMini from '../../ui/SpinnerMini';

function LoginForm() {
  const [email, setEmail] = useState('test@example.com');
  const [password, setPassword] = useState('76587658');
  const { login, isPending } = useLogin();

  function handleSubmit(e) {
    e.preventDefault();

    if (!email || !password) return;
    login(
      { email, password },
      {
        onSettled: () => {
          setEmail('');
          setPassword('');
        },
      }
    );
  }

  return (
    <Form $type='regular' onSubmit={handleSubmit}>
      <FormRowVertical label='Email address'>
        <Input
          required
          type='email'
          id='email'
          autoComplete='username'
          value={email}
          onChange={e => setEmail(e.target.value)}
          disabled={isPending}
        />
      </FormRowVertical>
      <FormRowVertical label='Password'>
        <Input
          required
          type='password'
          id='password'
          autoComplete='current-password'
          value={password}
          onChange={e => setPassword(e.target.value)}
          disabled={isPending}
        />
      </FormRowVertical>
      <FormRowVertical>
        <Button $size='large' disabled={isPending}>
          {isPending ? <SpinnerMini /> : 'Log in'}
        </Button>
      </FormRowVertical>
    </Form>
  );
}

export default LoginForm;
