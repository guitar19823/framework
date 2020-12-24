import Button from '../Button';
import './index.css';

export const Form = props => {
  const {
    children,
    formTitle = '',
    buttonText,
    onSubmit,
    style,
    ref,
  } = props;

  const handleSubmit = e => {
    e.preventDefault();

    onSubmit(e);
  }

  return (
    <form onSubmit={handleSubmit} style={style} ref={ref}>
      {
        formTitle ? (
          <div className="form-title">
            <strong>{formTitle}</strong>
          </div>
        ) : null
      }

      {children}

      <Button type="submit" value={buttonText} />
    </form>
  );
};