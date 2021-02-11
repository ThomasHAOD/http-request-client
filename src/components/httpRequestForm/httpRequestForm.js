import React, { useState } from 'react';
import Button from '../ui/button';
import Input from '../ui/input';
import Dropdown from '../ui/dropdown';
import './httpRequestForm.css';

const httpMethodOptions = [{ value: 'GET' }, { value: 'POST' }];

const HttpRequestForm = ({ handleFormSubmit, setBody, body }) => {
  const [url, setURL] = useState('http://localhost');
  const [method, setMethod] = useState('GET');

  const request = { url, method };

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
      {method === 'POST' && (
        <Input
          id={'body-input'}
          label={'Request Body'}
          type={'text'}
          value={body}
          change={setBody}
        />
      )}

      <code className='request-preview'>
        <p>url: {url}</p>
        <p>method: {method}</p>
        {method !== 'GET' && <p>body: {body}</p>}
      </code>
      <Button
        label={'Send HTTP Request'}
        clicked={handleFormSubmit}
        request={request}
      />
    </div>
  );
};

export default HttpRequestForm;
