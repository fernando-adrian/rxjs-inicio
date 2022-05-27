import { fromEvent, map, tap } from "rxjs";

const texto = document.createElement('div');
texto.innerHTML = `

Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero reiciendis cupiditate eius quasi aperiam est possimus illum provident, perspiciatis, aspernatur ea. Eveniet repellendus et minus nihil molestiae. Ut, repellendus? Magnam nobis sed corporis! Quia aliquid iste deleniti. Odit expedita iste possimus aut nemo deleniti dolores aliquam sint cupiditate quis ipsum eligendi doloribus placeat cum, amet unde blanditiis, corporis eveniet! Sequi dolor deleniti vel culpa. Obcaecati quo, officiis neque officia voluptatem sit velit incidunt labore iste maxime vero optio fugiat voluptatibus sapiente tempore illo maiores. Id fugiat voluptatibus cupiditate, perspiciatis in eos eius sit suscipit voluptate fugit nemo. 
<br><br>
Quaerat deleniti commodi sunt eveniet obcaecati harum veritatis, ipsam, illum magnam odio totam eaque? Autem illum tempora assumenda voluptates eum alias architecto porro consequuntur dolore, amet quam hic! Iste nostrum laborum eum excepturi nemo nisi earum at architecto, reiciendis aliquam officiis sunt beatae in maiores cupiditate laudantium voluptatibus quibusdam unde illo suscipit esse alias eaque? Dolorum a enim sequi esse voluptate eligendi error molestias beatae vel blanditiis nam inventore laborum accusamus deserunt est molestiae tempora mollitia cumque, neque quidem. Obcaecati, facilis nulla! Magni illo eaque, similique reiciendis laudantium obcaecati, iusto, nisi exercitationem error laborum animi voluptatibus? Repellat saepe minima voluptate maxime qui architecto rerum a facilis quos? Maiores totam recusandae eius est accusamus facilis, quo cupiditate labore saepe sint dolorum nisi sed ipsam culpa corporis iste aliquam, voluptatem eos aspernatur consequatur nostrum magni quae? Eum inventore optio sint id nobis magni nihil doloremque ad. 
<br><br>
Tempora, fugiat ducimus repellat vel cupiditate neque error modi earum eius, quis quaerat ad in, commodi iure beatae quos voluptatum. Temporibus a similique vitae adipisci sunt sit illum, ducimus, atque nostrum esse ad fuga amet in ea corrupti iure quisquam nesciunt pariatur! Pariatur sed, similique ducimus, quae ea ex blanditiis, veniam hic odio voluptatum quod eaque quasi ullam fuga?
<br><br>
Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero reiciendis cupiditate eius quasi aperiam est possimus illum provident, perspiciatis, aspernatur ea. Eveniet repellendus et minus nihil molestiae. Ut, repellendus? Magnam nobis sed corporis! Quia aliquid iste deleniti. Odit expedita iste possimus aut nemo deleniti dolores aliquam sint cupiditate quis ipsum eligendi doloribus placeat cum, amet unde blanditiis, corporis eveniet! Sequi dolor deleniti vel culpa. Obcaecati quo, officiis neque officia voluptatem sit velit incidunt labore iste maxime vero optio fugiat voluptatibus sapiente tempore illo maiores. Id fugiat voluptatibus cupiditate, perspiciatis in eos eius sit suscipit voluptate fugit nemo. 
<br><br>
Quaerat deleniti commodi sunt eveniet obcaecati harum veritatis, ipsam, illum magnam odio totam eaque? Autem illum tempora assumenda voluptates eum alias architecto porro consequuntur dolore, amet quam hic! Iste nostrum laborum eum excepturi nemo nisi earum at architecto, reiciendis aliquam officiis sunt beatae in maiores cupiditate laudantium voluptatibus quibusdam unde illo suscipit esse alias eaque? Dolorum a enim sequi esse voluptate eligendi error molestias beatae vel blanditiis nam inventore laborum accusamus deserunt est molestiae tempora mollitia cumque, neque quidem. Obcaecati, facilis nulla! Magni illo eaque, similique reiciendis laudantium obcaecati, iusto, nisi exercitationem error laborum animi voluptatibus? Repellat saepe minima voluptate maxime qui architecto rerum a facilis quos? Maiores totam recusandae eius est accusamus facilis, quo cupiditate labore saepe sint dolorum nisi sed ipsam culpa corporis iste aliquam, voluptatem eos aspernatur consequatur nostrum magni quae? Eum inventore optio sint id nobis magni nihil doloremque ad. 
<br><br>
Tempora, fugiat ducimus repellat vel cupiditate neque error modi earum eius, quis quaerat ad in, commodi iure beatae quos voluptatum. Temporibus a similique vitae adipisci sunt sit illum, ducimus, atque nostrum esse ad fuga amet in ea corrupti iure quisquam nesciunt pariatur! Pariatur sed, similique ducimus, quae ea ex blanditiis, veniam hic odio voluptatum quod eaque quasi ullam fuga?
Tempora, fugiat ducimus repellat vel cupiditate neque error modi earum eius, quis quaerat ad in, commodi iure beatae quos voluptatum. Temporibus a similique vitae adipisci sunt sit illum, ducimus, atque nostrum esse ad fuga amet in ea corrupti iure quisquam nesciunt pariatur! Pariatur sed, similique ducimus, quae ea ex blanditiis, veniam hic odio voluptatum quod eaque quasi ullam fuga?
<br><br>
Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero reiciendis cupiditate eius quasi aperiam est possimus illum provident, perspiciatis, aspernatur ea. Eveniet repellendus et minus nihil molestiae. Ut, repellendus? Magnam nobis sed corporis! Quia aliquid iste deleniti. Odit expedita iste possimus aut nemo deleniti dolores aliquam sint cupiditate quis ipsum eligendi doloribus placeat cum, amet unde blanditiis, corporis eveniet! Sequi dolor deleniti vel culpa. Obcaecati quo, officiis neque officia voluptatem sit velit incidunt labore iste maxime vero optio fugiat voluptatibus sapiente tempore illo maiores. Id fugiat voluptatibus cupiditate, perspiciatis in eos eius sit suscipit voluptate fugit nemo. 
<br><br>
Quaerat deleniti commodi sunt eveniet obcaecati harum veritatis, ipsam, illum magnam odio totam eaque? Autem illum tempora assumenda voluptates eum alias architecto porro consequuntur dolore, amet quam hic! Iste nostrum laborum eum excepturi nemo nisi earum at architecto, reiciendis aliquam officiis sunt beatae in maiores cupiditate laudantium voluptatibus quibusdam unde illo suscipit esse alias eaque? Dolorum a enim sequi esse voluptate eligendi error molestias beatae vel blanditiis nam inventore laborum accusamus deserunt est molestiae tempora mollitia cumque, neque quidem. Obcaecati, facilis nulla! Magni illo eaque, similique reiciendis laudantium obcaecati, iusto, nisi exercitationem error laborum animi voluptatibus? Repellat saepe minima voluptate maxime qui architecto rerum a facilis quos? Maiores totam recusandae eius est accusamus facilis, quo cupiditate labore saepe sint dolorum nisi sed ipsam culpa corporis iste aliquam, voluptatem eos aspernatur consequatur nostrum magni quae? Eum inventore optio sint id nobis magni nihil doloremque ad. 
<br><br>
Tempora, fugiat ducimus repellat vel cupiditate neque error modi earum eius, quis quaerat ad in, commodi iure beatae quos voluptatum. Temporibus a similique vitae adipisci sunt sit illum, ducimus, atque nostrum esse ad fuga amet in ea corrupti iure quisquam nesciunt pariatur! Pariatur sed, similique ducimus, quae ea ex blanditiis, veniam hic odio voluptatum quod eaque quasi ullam fuga?
`;

const body = document.querySelector('body');
body.append(texto);

const progressBar = document.createElement('div');
progressBar.setAttribute('class', 'progress-bar');
body.append(progressBar);

//funcion que haga el calculo
const calcularPorcentajeScroll = (event)=>{
    const {
        scrollTop,
        scrollHeight,
        clientHeight
    } = event.target.documentElement;

    // console.log({scrollTop, scrollHeight, clientHeight});

    return ( scrollTop / (scrollHeight - clientHeight)) * 100;
}

//streams
const scroll$ = fromEvent(document, 'scroll');
// scroll$.subscribe(console.log);

const progress$ = scroll$.pipe(
    // map(event => calcularPorcentajeScroll(event))
    map(calcularPorcentajeScroll),
    tap( console.log)
);

progress$.subscribe(porcentaje => {
    progressBar.style.width = `${porcentaje}%`;
    // console.log(porcentaje);
});