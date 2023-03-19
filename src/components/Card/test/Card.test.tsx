import { render } from '@testing-library/react';
import Card from '../Card';

describe('card item liks', () => {
  test('Проверка на отрицательное число в liks', () => {
    const card = (
      <Card
        img={'https://naked-science.ru/wp-content/uploads/2017/05/field_image_marsandmoon_00.jpeg'}
        title={'test'}
        author={'Pop'}
        tags={['design']}
        liksCount={-1}
        viewCount={1000}
      />
    );
    const { container } = render(card);
    const likes = container.querySelector('.likes');
    const num = Number(likes?.textContent);
    expect(num <= -1).not.toBeTruthy();
  });

  test('Проверка на число 0 в liks', () => {
    const card = (
      <Card
        img={'https://naked-science.ru/wp-content/uploads/2017/05/field_image_marsandmoon_00.jpeg'}
        title={'test'}
        author={'Pop'}
        tags={['design']}
        liksCount={0}
        viewCount={1000}
      />
    );
    const { container } = render(card);
    const likes = container.querySelector('.likes');
    const num = Number(likes?.textContent);
    expect(num === 0).toBeTruthy();
  });

  test('Проверка на undefined в liks', () => {
    const card = (
      <Card
        img={'https://naked-science.ru/wp-content/uploads/2017/05/field_image_marsandmoon_00.jpeg'}
        title={'test'}
        author={'Pop'}
        tags={['design']}
        viewCount={1000}
      />
    );
    const { container } = render(card);
    const likes = container.querySelector('.likes');
    const text = likes?.textContent;
    expect(text !== 'undefined').toBeTruthy();
  });
});

describe('card item view', () => {
  test('Проверка на отрицательное число в views', () => {
    const card = (
      <Card
        img={'https://naked-science.ru/wp-content/uploads/2017/05/field_image_marsandmoon_00.jpeg'}
        title={'test'}
        author={'Pop'}
        tags={['design']}
        liksCount={-1}
        viewCount={-1}
      />
    );
    const { container } = render(card);
    const likes = container.querySelector('.views');
    const num = Number(likes?.textContent);
    expect(num <= -1).not.toBeTruthy();
  });

  test('Проверка на число 0 в views', () => {
    const card = (
      <Card
        img={'https://naked-science.ru/wp-content/uploads/2017/05/field_image_marsandmoon_00.jpeg'}
        title={'test'}
        author={'Pop'}
        tags={['design']}
        liksCount={0}
        viewCount={0}
      />
    );
    const { container } = render(card);
    const likes = container.querySelector('.views');
    const num = Number(likes?.textContent);
    expect(num === 0).toBeTruthy();
  });

  test('Проверка на undefined в views', () => {
    const card = (
      <Card
        img={'https://naked-science.ru/wp-content/uploads/2017/05/field_image_marsandmoon_00.jpeg'}
        title={'test'}
        author={'Pop'}
        tags={['design']}
      />
    );
    const { container } = render(card);
    const likes = container.querySelector('.views');
    const text = likes?.textContent;
    expect(text !== 'undefined').toBeTruthy();
  });
});
