import { FC, useState } from 'react';
import styles from './ProductCard.module.css';
import { Product } from '../../types/Product';

interface Props {
  product: Product;
}

export const ProductCard: FC<Props> = ({ product }) => {
  const [inStock, setInStock] = useState(product.in_stock);

  const handleVolumeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedIndex = e.target.selectedIndex
    const volume = product.volumes[selectedIndex]
    
    setInStock(volume.in_stock)
  }

  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img
          src={`/products/productImage.png`}
          alt={product.name}
          className={styles.image}
        />
      </div>

      <div className={styles.priceRow}>
        {product.old_price && (
          <span className={styles.oldPrice}>{product.old_price}</span>
        )}

        <span className={styles.price}>{product.price} грн</span>

        {product.old_price && (
          <span className={styles.discountWrapper}>
            <img
                src="/products/iconArrow.png"
                className={styles.discountIcon}
            />
            <span className={styles.discount}>
                -{Math.round(
                ((product.old_price - product.price) / product.old_price) * 100
                )}%
            </span>
        </span>
        )}
      </div>

      <div className={styles.name}>{product.name}</div>

      <div className={styles.rating}>
        <span className={styles.stars}>★★★★★</span>
        <span className={styles.reviews_count}>{product.reviews_count}</span>
      </div>

      <div className={styles.statusRow}>
        <span className={inStock ? styles.in_stock : styles.non_in_stock}>
            {`${inStock ? '● В наявності' : '● Немає в наявності'}`}
        </span>
        <img src="/products/iconCategory.png" />
        <span className={styles.category}>{product.category}</span>
      </div>

      <div className={styles.actions}>
        <select className={styles.select} onChange={handleVolumeChange}>
          {product.volumes.map((el, i) =>
            <option key={i}>{el.label}</option>
          )}
        </select>

        <button className={styles.button}>
            <img src="/cart.svg" className={styles.cartIcon} />
            До кошика
        </button>
      </div>
    </div>
  );
};