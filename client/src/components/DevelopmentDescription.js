export const DevelopmentDescription = () => {
  return (
    <>
      <h3 className="page-title white-text">Development description</h3>
      <div className="container">
        <h5><p>  Проект состоит  из двух back-end приложений и одного front-end приложения</p></h5>

        <span className="bold-text">back-end :</span>
        <ul className="browser-default">
          <li>
            <a href="https://github.com/illusionoff/criptoarbitr_test" target="_blanc" >
              criptoarbitr_test</a>- основное приложение</li>
          <li><a href="https://github.com/illusionoff/testsqueezebith" target="_blanc" >
            testsqueezebith</a> - вспомогательное приложение</li>
        </ul>

        <span className="bold-text">front-end :</span>
        <ul className="browser-default">
          <li>
            <a href="https://github.com/illusionoff/reactcriptoarbitr_test_squeeze" target="_blanc" >
              reactcriptoarbitr_test_squeeze</a> - размещение информации о проекте, вывод данных работы проекта  в виде графиков</li>
        </ul>

        <span className="bold-text">Функции  criptoarbitr_test :</span>
        <ul className="browser-default">
          <li>Загрузка данных о комиссиях двух бирж и интересующих монетах</li>
          <li>Получение данных о котировках выбранной монеты с двух бирж одновременно</li>
          <li>Сравнение котировок между двумя биржами с учетом комиссий</li>
          <li>Принятие решения - получение сигнала при достижении необходимой прибыли ( профита)</li>
          <li>Запись данных в .CSV файл основных параметров котировок с максимальной детализацией</li>
        </ul>

        <span className="bold-text">Функции  testsqueezebith :</span>
        <ul className="browser-default">
          <li>Анализ скорости (ping) поступления информации о котировках между своим сервером и биржой Bithump Global (Bithumb.pro)</li>
          <li>Запись данных в файл  при превышении 1.5% цены вверх или вниз от средней цены за последние 5 минут</li>
          <li>Запись всех данных в файл :
            <ul className="browser-default">
              <li>цена sell, buy</li>
              <li>время сервера Bithump  источник №1</li>
              <li>время сервера Bithump  источник №2</li>
              <li>разница времени между “своим” сервером и двумя источниками времени Bithump</li>
              <li>нахождение средней разницы во времени между “своим” сервером и двумя источниками времени Bithump</li>
            </ul>
          </li>
          <li>Принятие решения - получение сигнала при достижении необходимой прибыли ( профита)</li>
          <li>Запись данных в .CSV файл основных параметров котировок с максимальной детализацией</li>

          <blockquote>
            Примечание: под “своим” сервером, подразумевается сервер, на котором будет разворачиваться проект
          </blockquote>
          <li>Нахождение пяти точек, имеющих наибольшее отклонение от среднего значения цены за последние 5 минут по sell и buy</li>
        </ul>

        <span className="bold-text">Функции  reactcriptoarbitr_test_squeeze :</span>
        <ul className="browser-default">
          <li>Описание проекта в виде web приложения</li>
          <li>Загрузка файлов статистики работающего проекта</li>
          <li>Визуализация данных из файлов в виде графиков</li>
        </ul>
      </div >
    </>
  )
}
