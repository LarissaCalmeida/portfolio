import * as React from "react";

interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  message,
}) => (
  <div>
    <h1>Portfólio</h1>

    <p>
      <strong>Nome: </strong>
      {name}
    </p>
    <p>
      <strong>E-mail: </strong>
      {email}
    </p>
    <p>
      {" "}
      <strong>Mensagem: </strong>
      {message}
    </p>
  </div>
);
