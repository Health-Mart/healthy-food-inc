import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation,
  useParams
} from 'react-router-dom';
import Modal from './Modal.jsx';

const replacementImages = {
  511748:
    'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/200518-delish-seo-breakfast-tacos-h-14601-eb-1590516559.jpg?crop=1xw:0.9164255020608612xh;center,top&resize=980:*',
  665282:
    'https://goodeggs4.imgix.net/c7dbfd66-3bc6-464c-9e44-66ec80431d85.jpg?w=840&h=525&fm=jpg&q=80&fit=crop',
  636062:
    'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/porridge-with-quick-berry-compote-figs-pistachios-7187c9f.jpg?quality=90&resize=960,872',
  636066: 'http://yestoyolks.com/wp-content/uploads/2014/04/IMG_1532.jpg',
  636080: 'http://assets.kraftfoods.com/recipe_images/opendeploy/56928_640x428.jpg',
  644822:
    'https://goodeggs4.imgix.net/b8aa5da1-b9f4-4e73-b385-daebe0b086ef.jpg?w=840&h=525&fm=jpg&q=80&fit=crop',
  636026: 'https://hips.hearstapps.com/del.h-cdn.co/assets/17/38/1506017532-sausage-gravy.jpg',
  1096243:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0BexE5mhL3rOVjAwpOmqmxSDDGCNWxUHAXg&usqp=CAU',
  641185:
    'https://lh3.googleusercontent.com/IakCdptgdMaL2WIuhVXZuWMUw_E4wl8h1CCF9AZhV2BddFj0KNCDvi_fpzW1JFk1RgcxHE66VdaNum--gu7VbK0=w1280-h960-c-rj-v1-e365',
  661984: 'https://images-gmi-pmc.edge-generalmills.com/73bd4146-76dd-46ac-81e4-ee1cb9428143.jpg',
  665261:
    'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/11/23/0/FN_perfect-chicken-014_s4x3.jpg.rend.hgtvcom.616.462.suffix/1384540895467.jpeg',
  715538: 'https://d1e3z2jco40k3v.cloudfront.net/-/media/mccormick-us/recipes/mccormick/c/800/chicken_bruschetta_pasta_800x800.jpg',
  634698: 'https://andrewzimmern.com/wp-content/uploads/Beef-Tataki-1600x800.jpg',
  665734: 'https://fruitsandveggies.org/wp-content/uploads/2018/11/Corn-zucchini-pan-omelet-5-square-web-600x274.jpg'
};

function Card({ item }) {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal((prev) => !prev);
  };
  if (item === undefined) {
    return null;
  }
  const { title } = item;
  const image = replacementImages[item.id] ?? item.image;
  return (
    <>
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={image} alt="profile" />
          </figure>
        </div>
        <div className="card-content">
          <p className="title is-5">{title}</p>
          {/* <span>{item.id}</span> */}
          <p className="title is-7" />
        </div>
        <button onClick={openModal} className="button is-small" type="button">
          Learn More
        </button>
        <Modal
          item={item}
          showModal={showModal}
          setShowModal={setShowModal}
          openModal={openModal}
        />
      </div>
    </>
  );
}

export default Card;
