import React, { useState } from 'react';
import Button from '../ui/button';
import Input from '../ui/input';
import Dropdown from '../ui/dropdown';
import './httpRequestForm.css';

const httpMethodOptions = [{ value: 'GET' }, { value: 'POST' }];

const HttpRequestForm = () => {
  const [url, setURL] = useState('localhost');
  const [method, setMethod] = useState('GET');

  return (
    <div className='http-request-form'>
      <Input
        id={'url-input'}
        label={'URL'}
        type={'url'}
        value={url}
        change={setURL}
      />
      <Dropdown
        label='Method'
        options={httpMethodOptions}
        name={'http-method'}
        change={setMethod}
      />

      <Input id={'header-input'} label={'Headers'} />
      <code className='request-preview'>
        <p>url: {url}</p>
        <p>method: {method}</p>
        <p>
          headers:{' '}
          {`{
           headers
        }`}
        </p>
        {method !== 'GET' && <p>body:</p>}
      </code>
      <Button label={'Send HTTP Request'} />
    </div>
  );
};

export default HttpRequestForm;
