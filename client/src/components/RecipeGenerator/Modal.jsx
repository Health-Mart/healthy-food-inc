/* eslint-disable react/no-danger */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation,
  useParams
} from 'react-router-dom';
import { HealthContext } from '../../context/healthContext.jsx';

const replacementImages = {
  511748:
    'https://www.girlgonegourmet.com/wp-content/uploads/2018/04/Breakfast-Tacos-4-tastyrecipes.jpg',
  665282:
    'https://goodeggs4.imgix.net/c7dbfd66-3bc6-464c-9e44-66ec80431d85.jpg?w=840&h=525&fm=jpg&q=80&fit=crop',
  636062:
    'https://www.cookforyourlife.org/wp-content/uploads/2018/08/iStock_000056548760_Large.jpg',
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
    'https://static01.nyt.com/images/2019/01/23/dining/23kitchrex1/merlin_149035125_4687a6e2-ed75-45a2-b406-1b93cab6d220-articleLarge.jpg',
  390813:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi20Onn2CiABwIPc04rLBRSSSiSTFcmTDqWg&usqp=CAU',
  644711:
    'http://www.simplybeefandlamb.co.uk/media/2071/festive-roast-beef-with-ginger-and-five-spice-butter.jpg?width=1600&height=900&mode=crop',
  634710:
    'https://jamiecooksitup.net/wp-content/uploads/2018/04/Teriyaki-Beef-and-Pepper-Stir-Fry2.jpg',
  660273:
    'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/slow-cooker-chili-horizontal-1529354330.png',
  639306:
    'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimg1.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2Fimage%2F2017%2F01%2Fmain%2Fshallow-poached-eggs.jpg%3Fitok%3DUMR_8ory',
  646071:
    'https://i8.amplience.net/i/traeger/DW_Recipe_gyros_Hero?w=1200&sm=aspect&aspect=2:1&scaleFit=poi&$poi2$',
  1096161:
    'https://www.budgetbytes.com/wp-content/uploads/2018/12/Sheet-Pan-Greek-Chicken-and-Vegetables-diagonal.jpg',
  716433:
    'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2003/10/16/4/tm1b17_fruit_parfaits1.jpg.rend.hgtvcom.616.462.suffix/1434575166114.jpeg',
  715438:
    'https://photos.bigoven.com/recipe/hero/main-cornbread-casserole-mexic-6c6c88.jpg?h=500&w=500',
  647615:
    'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F9%2F2016%2F07%2Fhuli-huli-chicken-wings-ft-recipe0619_0.jpg',
  918026: 'https://readyseteat.com/sites/g/files/qyyrlu501/files/uploadedImages/img_2273_8280.jpg',
  635701: 'https://www.billeauds.com/wp-content/uploads/boudin-cut-black.jpg',
  634476: 'https://www.foodnetwork.com/content/dam/images/food/video/0/01/013/0137/0137773.jpg',
  637876: 'https://upload.wikimedia.org/wikipedia/commons/5/5d/Chicken_65_%28Dish%29.jpg',
  1096256: 'https://www.realfoodsource.com/wp-content/uploads/2017/02/tiger-nut-crumble-bars-1.jpg',
  632342: 'https://www.onestop.co.uk/wp-content/uploads/Recipe-Thumbnails-1.jpg',
  640134:
    'https://d47gxy3fatgwk.cloudfront.net/wp-content/uploads/2019/07/slow-cooker-corned-beef-and-cabbage-2284-horiz.jpg',
  606953: 'https://southernbite.com/wp-content/uploads/2018/04/Cajun-Chicken-Pasta-3.jpg',
  682619:
    'https://hips.hearstapps.com/del.h-cdn.co/assets/17/24/1497458825-delish-shrimp-fried-rice-1-1024.jpg',
  656777: 'http://www.gimmesomeoven.com/wp-content/uploads/2012/11/pork-fried-rice-1.jpg',
  663559: 'https://lostinfood.co.uk/wp-content/uploads/2018/01/LIF-January-24-2018-001-29.jpg'
};

const Text = styled.div`
  font-weight: 350;
  line-height: 1.5;
  font-size: 2rem;
  margin-top: 1.5em;
`;

const Modal = ({ showModal, setShowModal, openModal, item, addRecipe, deleteRecipe }) => {
  const { title, summary } = item;
  const image = replacementImages[item.id] ?? item.image;
  const { recipeStore } = useContext(HealthContext);
  const { isSelect } = useContext(HealthContext);
  const [recipes, setRecipes] = recipeStore;
  const [select, setSelect] = isSelect;

  const Img = styled.img`
    object-fit: contain;
  `;

  const Top = styled.div`
    display: flex;
    margin: 0.5em 0 1em 0;
  `;

  return (
    <>
      {showModal ? (
        <div id="modal" className="modal is-active">
          <div className="modal-background" />
          <div className="modal-card">
            <section className="modal-card-body">
              <Top>
                <p className="modal-card-title">
                  <strong>{title}</strong>
                </p>
                <button
                  onClick={() => {
                    openModal();
                  }}
                  className="delete"
                  type="submit"
                  aria-label="close"
                />
              </Top>
              <figure className="image">
                <Img src={image} alt="profile" />
              </figure>
              <Text className="title is-7 is-black" dangerouslySetInnerHTML={{ __html: summary }} />
            </section>
            <div className="modal-card-foot">
              {select ? (
                <button className="button is-danger is-rounded" type="button">
                  Save
                </button>
              ) : (
                <button
                  onClick={() => {
                    addRecipe(item);
                  }}
                  className="button is-success is-rounded"
                  type="button"
                >
                  Save
                </button>
              )}
              <button
                onClick={() => {
                  deleteRecipe(item);
                }}
                className="button is-success is-rounded"
                type="button"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;
