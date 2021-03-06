import React from 'react';
import useUser from '../../swr/useUsers';
import styles from './index.module.scss';
import Spinner from '../../components/spinner/spinner';
const About = () => {
  const { user, isLoading } = useUser();
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        user.map((article, index) => {
          return (
            <div key={index}>
              <div className={styles.res}>
                <p>id: {article.id}</p>
                <p>name: {article.name}</p>
                <p>gender: {article.gender}</p>
              </div>
            </div>
          );
        })
      )}
    </>
  );
};

export default About;
