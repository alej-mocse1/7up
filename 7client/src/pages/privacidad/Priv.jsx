import React, { useEffect } from 'react';
import styles from './Priv.module.css';
import Navbar from '../../components/navbar/navbar';
import title from "../../assets/titulo_adp.png";
import ProductosImg from "../../assets/productos.png";
import Footer from '../../components/footer/footer';
import ballonder2 from "../../assets/balloon_der2.png";
import ballonder from "../../assets/balloon_der.png";
import ballon1zq from "../../assets/balloon_izq.png";

const Priv = () => {

        useEffect(() => {
            window.scrollTo(0, 0);
          }, []);

  return (
    <div className={styles.tycBackground}>
    <div className={styles.container}>
        <div className={styles.navbarStyles}>
              <Navbar></Navbar>
        </div> 
        <div className={styles.container2}>
            <h1 className={styles.title}>
                <img src={title} alt="title" className={styles.titleImg} />
            </h1>
            <p className={styles.text}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit cum delectus fugiat ducimus accusantium dolor, ipsa sint officia aperiam architecto tenetur perferendis quas recusandae nesciunt esse quia qui hic soluta.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam sit, eveniet magnam minima expedita optio asperiores labore cum voluptatem doloremque perferendis cumque laborum? Doloremque magnam iure at earum? Tenetur, officiis?
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia aperiam culpa autem nostrum natus perspiciatis quaerat quisquam explicabo maiores, eum quo labore est illum quia! Fuga eligendi alias quidem culpa.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. At quos alias beatae rem non. Enim inventore dolores animi in, recusandae exercitationem vel cumque magnam. Nesciunt dicta debitis quod doloremque voluptate.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi veniam quo labore reiciendis nihil nisi molestiae dolorem eligendi neque quos eaque explicabo tempore a, fugiat sint modi eveniet distinctio harum!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, magnam fuga quas expedita facilis rem cum aperiam eligendi doloremque laudantium ipsam id delectus vitae temporibus qui nostrum ullam rerum ducimus.
            </p>

            <p className={styles.text}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit cum delectus fugiat ducimus accusantium dolor, ipsa sint officia aperiam architecto tenetur perferendis quas recusandae nesciunt esse quia qui hic soluta.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam sit, eveniet magnam minima expedita optio asperiores labore cum voluptatem doloremque perferendis cumque laborum? Doloremque magnam iure at earum? Tenetur, officiis?
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia aperiam culpa autem nostrum natus perspiciatis quaerat quisquam explicabo maiores, eum quo labore est illum quia! Fuga eligendi alias quidem culpa.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. At quos alias beatae rem non. Enim inventore dolores animi in, recusandae exercitationem vel cumque magnam. Nesciunt dicta debitis quod doloremque voluptate.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi veniam quo labore reiciendis nihil nisi molestiae dolorem eligendi neque quos eaque explicabo tempore a, fugiat sint modi eveniet distinctio harum!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, magnam fuga quas expedita facilis rem cum aperiam eligendi doloremque laudantium ipsam id delectus vitae temporibus qui nostrum ullam rerum ducimus.
            </p>


            <p className={styles.text}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit cum delectus fugiat ducimus accusantium dolor, ipsa sint officia aperiam architecto tenetur perferendis quas recusandae nesciunt esse quia qui hic soluta.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam sit, eveniet magnam minima expedita optio asperiores labore cum voluptatem doloremque perferendis cumque laborum? Doloremque magnam iure at earum? Tenetur, officiis?
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia aperiam culpa autem nostrum natus perspiciatis quaerat quisquam explicabo maiores, eum quo labore est illum quia! Fuga eligendi alias quidem culpa.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. At quos alias beatae rem non. Enim inventore dolores animi in, recusandae exercitationem vel cumque magnam. Nesciunt dicta debitis quod doloremque voluptate.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi veniam quo labore reiciendis nihil nisi molestiae dolorem eligendi neque quos eaque explicabo tempore a, fugiat sint modi eveniet distinctio harum!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, magnam fuga quas expedita facilis rem cum aperiam eligendi doloremque laudantium ipsam id delectus vitae temporibus qui nostrum ullam rerum ducimus.
            </p>

            <p className={styles.text}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit cum delectus fugiat ducimus accusantium dolor, ipsa sint officia aperiam architecto tenetur perferendis quas recusandae nesciunt esse quia qui hic soluta.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam sit, eveniet magnam minima expedita optio asperiores labore cum voluptatem doloremque perferendis cumque laborum? Doloremque magnam iure at earum? Tenetur, officiis?
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia aperiam culpa autem nostrum natus perspiciatis quaerat quisquam explicabo maiores, eum quo labore est illum quia! Fuga eligendi alias quidem culpa.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. At quos alias beatae rem non. Enim inventore dolores animi in, recusandae exercitationem vel cumque magnam. Nesciunt dicta debitis quod doloremque voluptate.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi veniam quo labore reiciendis nihil nisi molestiae dolorem eligendi neque quos eaque explicabo tempore a, fugiat sint modi eveniet distinctio harum!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, magnam fuga quas expedita facilis rem cum aperiam eligendi doloremque laudantium ipsam id delectus vitae temporibus qui nostrum ullam rerum ducimus.
            </p>
        </div>
    </div>

    <h1 className={styles.containImg} style={{marginTop:"-350px", backgroundColor:"#32ab56"}}  >
        <img src={ProductosImg} alt="ProductosImg" className={styles.porductosImg} />
     </h1>

     <h1 className={styles.containImg2}>
        <img src={ballonder2} alt="ballonder2" className={styles.ballonder2} />
     </h1>

     <h1 className={styles.containImg3}>
        <img src={ballonder} alt="ballonder3" className={styles.ballonder} />
     </h1>


     <h1 className={styles.containImg4}>
        <img src={ballon1zq} alt="ballon1zq" className={styles.ballon1zq} />
     </h1>

     
    <div className={styles.containerFooter} style={{marginTop:"-150px", backgroundColor:"white"}} >
      <div className={styles.margenFoter}></div>
      <Footer></Footer>     
    </div> 


    </div>

  );
};

export default Priv;