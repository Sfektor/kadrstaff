import { load } from "@2gis/mapgl";
import { useEffect, memo } from "react";
import InnerHTML from "dangerously-set-html-content";

const vidget = `
  <a
          class="dg-widget-link"
          href="http://2gis.ru/togliatti/firm/70000001089056009/center/49.294411,53.536931/zoom/16?utm_medium=widget-source&utm_campaign=firmsonmap&utm_source=bigMap"
        >
          Посмотреть на карте Тольятти
        </a>
        <div class="dg-widget-link">
          <a href="http://2gis.ru/togliatti/firm/70000001089056009/photos/70000001089056009/center/49.294411,53.536931/zoom/17?utm_medium=widget-source&utm_campaign=firmsonmap&utm_source=photos">
            Фотографии компании
          </a>
        </div>
        <div class="dg-widget-link">
          <a href="http://2gis.ru/togliatti/center/49.294411,53.536931/zoom/16/routeTab/rsType/bus/to/49.294411,53.536931╎КадрСтафф, кадровое агентство?utm_medium=widget-source&utm_campaign=firmsonmap&utm_source=route">
            Найти проезд до КадрСтафф, кадровое агентство
          </a>
        </div>
        `;

const MapWrapper = memo(
  () => {
    return <div id="map-container" style={{ width: "100%", height: "100%" }}></div>;
  },
  () => true
);

export const MapDublGis = () => {
  useEffect(() => {
    let map;
    load().then((mapglAPI) => {
      map = new mapglAPI.Map("map-container", {
        center: [49.294217419092284, 53.53715301882991],
        zoom: 16,
        key: "c8bbc392-29c4-48e0-82ca-92870be2847c",
      });
      new mapglAPI.Marker(map, {
        coordinates: [49.294217419092284, 53.53715301882991],
      });
      new mapglAPI.HtmlMarker(map, {
        coordinates: [49.294217419092284, 53.53715301882991],
        html: vidget,
      });
    });

    // Удаляем карту при размонтировании компонента
    return () => map && map.destroy();
  }, []);

  const html = `
<script charset="utf-8" src="https://widgets.2gis.com/js/DGWidgetLoader.js"></script>

  `;

  return (
    <div>
      <MapWrapper />
      <InnerHTML html={html} />
    </div>
  );
};
