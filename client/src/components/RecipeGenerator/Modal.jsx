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
  715538:
    'https://d1e3z2jco40k3v.cloudfront.net/-/media/mccormick-us/recipes/mccormick/c/800/chicken_bruschetta_pasta_800x800.jpg',
  634698: 'https://andrewzimmern.com/wp-content/uploads/Beef-Tataki-1600x800.jpg',
  665734:
    'https://fruitsandveggies.org/wp-content/uploads/2018/11/Corn-zucchini-pan-omelet-5-square-web-600x274.jpg',
  652335: 'https://thecozyapron.com/wp-content/uploads/2018/05/mongolian-beef_thecozyapron_1.jpg',
  797177: 'https://img.taste.com.au/s9qgdSXL/taste/2016/11/corned-beef-hash-cakes-14696-1.jpeg',
  635793:
    'https://lh3.googleusercontent.com/proxy/4UjS0e93eUmMB5XQQbpSbFg_29HVuPNoey1az4BatI0rNE2oLgOWOCD7UHrO9IMu3p1r7Bew4-C8qGQpRKJ7TVc5qxxPRcSLbJDBGZLLBYsmZc8kx-WIHmrMaF0rfRAxYUIU_HEyZlU',
  390813:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi20Onn2CiABwIPc04rLBRSSSiSTFcmTDqWg&usqp=CAU',
  644711:
    'http://www.simplybeefandlamb.co.uk/media/2071/festive-roast-beef-with-ginger-and-five-spice-butter.jpg?width=1600&height=900&mode=crop',
  634710:
    'https://jamiecooksitup.net/wp-content/uploads/2018/04/Teriyaki-Beef-and-Pepper-Stir-Fry2.jpg',
  660273:
    'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/slow-cooker-chili-horizontal-1529354330.png'
};

const Modal = ({ showModal, setShowModal, openModal, item }) => {
  const { title, summary } = item;
  const image = replacementImages[item.id] ?? item.image;

  return (
    <>
      {showModal ? (
        <div className="modal is-active">
          <div className="modal-background" />
          <div className="modal-card">
            <div className="card-image">
              <figure className="image is-4by3">
                <img src={image} alt="profile" />
              </figure>
            </div>
            <div className="modal-card-body">
              <p className="title is-7" dangerouslySetInnerHTML={ { __html: summary } }></p>
              <p className="title is-4">{title}</p>
              <p className="title is-5">Ingredients</p>
              <p className="title is-7">12 ounces fettuccine</p>
              <p className="title is-7">4 slices bacon, chopped</p>
              <p className="title is-7">1 pound chicken tenders, cut into 1-inch pieces</p>
              <p className="title is-7">2 cloves garlic, minced</p>
              <p className="title is-7">4 plum tomatoes, chopped</p>
              <p className="title is-7">1 cup heavy cream</p>
              <p className="title is-7">5 ounces baby spinach</p>
              <p className="title is-7">3/4 cup grated Parmesan</p>
              <p className="title is-7">3 tablespoons chopped fresh basil</p>
            </div>
            <div className="modal-card-foot">
              <button className="button is-success" type="button">
                Save
              </button>
              <button className="button" type="button">
                Delete
              </button>
            </div>
          </div>
          <button
            onClick={openModal}
            type="button"
            className="modal-close is-large"
            aria-label="close"
          />
        </div>
      ) : null}
    </>
  );
};

export default Modal;
