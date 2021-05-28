/* eslint-disable array-callback-return */
/* eslint-disable object-shorthand */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
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
import Modal from './Modal.jsx';
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
  1096256: 'https://www.realfoodsource.com/wp-content/uploads/2017/02/tiger-nut-crumble-bars-1.jpg',
  632342: 'https://www.onestop.co.uk/wp-content/uploads/Recipe-Thumbnails-1.jpg',
  640134:
    'https://d47gxy3fatgwk.cloudfront.net/wp-content/uploads/2019/07/slow-cooker-corned-beef-and-cabbage-2284-horiz.jpg',
  606953: 'https://southernbite.com/wp-content/uploads/2018/04/Cajun-Chicken-Pasta-3.jpg',
  682619:
    'https://hips.hearstapps.com/del.h-cdn.co/assets/17/24/1497458825-delish-shrimp-fried-rice-1-1024.jpg',
  656777: 'http://www.gimmesomeoven.com/wp-content/uploads/2012/11/pork-fried-rice-1.jpg',
  663559: 'https://lostinfood.co.uk/wp-content/uploads/2018/01/LIF-January-24-2018-001-29.jpg',
  617047: 'https://www.cookwithmanali.com/wp-content/uploads/2014/07/Rasmalai-Recipe.jpg',
  149656: 'https://www.budgetbytes.com/wp-content/uploads/2020/08/Beef-Taco-Skillet-close.jpg',
  652448:
    'https://www.thehungrybites.com/wp-content/uploads/2017/04/moroccan-rice-pilaf-side-dish-gluten-free-vegan-vegetarian-plant-based-recipe-marokino-rizi-5a.jpg'
};

const CardContent = styled.div`
  padding: 1rem;
  height: 6.5em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CardTitle = styled.p`
  font-weight: 700;
  color: #403e3b;
  &:hover {
    color: #087f8c;
    text-decoration: underline;
    cursor: pointer;
  }
`;

const CardButtom = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  color: black;
`;

const Img = styled.img`
  /* object-fit: fill; */
  display: block;
  width: 100%;
  height: 13em;
  object-fit: cover;
`;

const Button = styled.button`
  position: absolute;
  right: 0.7em;
  bottom: 0.7em;
`;

function Card({ item, addRecipe, deleteRecipe }) {
  const [showModal, setShowModal] = useState(false);
  const { recipeStore } = useContext(HealthContext);
  const [select, setSelect] = useState(false);
  const [recipeMeta, setRecipeMeta] = recipeStore;
  const openModal = () => {
    setShowModal((prev) => !prev);
  };
  if (item === undefined) {
    return null;
  }
  const { title } = item;
  const image = replacementImages[item.id] ?? item.image;
  const thisID = item.id;
  // console.log('this item: ', item);

  const selected = recipeMeta[thisID] === true;
  // console.log('isSelect: ', selected, thisID);

  return (
    <>
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <div>
              <Img src={image} alt="profile" loading="lazy" />
              {selected === undefined || selected === false ? (
                <Button onClick={openModal} className="button is-small" type="button">
                  Learn More
                </Button>
              ) : (
                <Button
                  onClick={() => {
                    deleteRecipe(item);
                  }}
                  className="button is-small is-primary"
                  type="button"
                >
                  {' '}
                  saved{' '}
                </Button>
              )}
            </div>
          </figure>
        </div>
        <CardContent>
          <CardTitle>{title}</CardTitle>
          {/* <span>{item.id}</span> */}
          <CardButtom>{item.readyInMinutes} min</CardButtom>
        </CardContent>
        <Modal
          item={item}
          addRecipe={addRecipe}
          deleteRecipe={deleteRecipe}
          showModal={showModal}
          setShowModal={setShowModal}
          openModal={openModal}
        />
      </div>
    </>
  );
}

export default Card;
