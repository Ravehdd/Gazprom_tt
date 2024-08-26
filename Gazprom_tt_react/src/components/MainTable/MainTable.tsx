import { useEffect, useState } from 'react';
import { useAppSelector } from "../../store/store.ts";
import { useDispatch } from "react-redux";
import { Product, productsSlice } from "../../store/products.slice";
import classes from "./MainTable.module.css"
import { apiBaseUrl } from "../../App";


const MainTable = () => {
    const products = useAppSelector(productsSlice.selectors.selectAllProducts)
    const dispatch = useDispatch()
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5; // Количество элементов на странице\
    const pagesToShow = 5;

        useEffect(() => {
        const fetchComponents = async () => {
            const response_comp = await fetch(apiBaseUrl +"productlist/", {
                
            });
            
            console.log("Helllo");
            const productlist : Product[] = await response_comp.json();

            dispatch(productsSlice.actions.addProduct({ productlist: productlist }));
            
        };

        fetchComponents();
    }, [dispatch]);



    // Функция для обработки перехода на другую страницу
    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    // Вычисляем индексы первого и последнего элементов для текущей страницы
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = Object.values(products).slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil( Object.values(products).length / itemsPerPage);
    let startPageIndex = Math.max(currentPage - Math.floor(pagesToShow / 2), 1);
    let endPageIndex = startPageIndex + pagesToShow - 1;

    // Если конечный индекс выходит за пределы общего количества страниц,
    // корректируем его и начальный индекс соответственно
    if (endPageIndex > totalPages) {
        endPageIndex = totalPages;
        startPageIndex = Math.max(endPageIndex - pagesToShow + 1, 1);
    }

    // Генерируем массив номеров страниц для отображения
    const pageNumbers = [];
    for (let i = startPageIndex; i <= endPageIndex; i++) {
        pageNumbers.push(i);
    }
    return (
        <div className={classes.header}>
          <div className={classes.products}>
              {currentItems.map((product) => (  
                <div className={classes.card}>
                    <div className={classes.image}>
                    </div>
                    <div className={classes.info}>
                        <p className={classes.name}>{product.ecrlongname.length > 15 ? product.ecrlongname.slice(0, 14) + "..." : product.ecrlongname}</p>
                        <p className={`${classes.name} ${classes.secondname}`}>{product.articlename.length > 15 ? product.articlename.slice(0, 15) + "..." : product.articlename}</p>
                        <div className={classes.info2}>
                          <div className={`${classes.arts}`}>
                                <p className={classes.art}>арт. {product.articleid}</p>
                                <p className={classes.art}>субарт. {product.subarticleid}</p>
                                <p className={classes.art}>id {product.external_str_id}</p>
                          </div>
                          <img className={classes.addToCart} src="/img/AddToCart.svg" alt="AddToCart.svg" />
                        </div>
                    </div>
                </div>
              ))}
              
          </div>
      {/* Отображение данных таблицы */}
      {/* <section className={classes.mainTableContainer}>

        <table>
            <thead>
            <tr>
                <th>Article ID</th>
                <th>Subartical ID</th>
                <th>Article name</th>
                <th>External string ID</th>
                <th>Ecrlongname </th>
            </tr>
            </thead>
            <tbody>
            {currentItems.map((item) => (
                <tr key={item.articleid}>
                <td>{item.articleid}</td>
                <td>{item.subarticleid}</td>
                <td>{item.articlename}</td>
                <td>{item.external_str_id}</td>
                <td>{item.ecrlongname}</td>
                </tr>
            ))}
            </tbody>
        </table>
      </section> */}

      {/* Пагинация */}
      <div className={classes.pagination}>
        {pageNumbers.map(number => (
          <button key={number} className={classes.paginationButton} onClick={() => paginate(number)}>
            {number}
          </button>
        ))}
      </div>
    </div>
    );
};

export default MainTable;