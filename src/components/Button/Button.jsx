import { StylesButton } from 'components/Button/StylesButton';

export const Button = ({ loadMore }) => {
  return (
    <StylesButton type="button" onClick={loadMore}>Load more</StylesButton>
  );
};

