
import '@mescius/spread-sheets-designer-resources-en';
import { Designer } from '@mescius/spread-sheets-designer-react';
import '@mescius/spread-sheets-designer/styles/gc.spread.sheets.designer.min.css'
import '@mescius/spread-sheets/styles/gc.spread.sheets.excel2013white.css'
import * as GC from '@mescius/spread-sheets';
import * as ExcelIO from "@mescius/spread-excelio";
import { useEffect, useState } from 'preact/hooks';


export function App() {
  const [template, setTemplate] = useState(null);
  GC.Spread.Sheets.LicenseKey = "GrapeCity-Internal-Use-Only,*.mescius.io|*.mescius.com,364399587337569#B1KJjUhhFSyoVeR5EZ4FleVVDTzxmcyg6MrwGTP5mZtNVUaJ5bQtmSyE6bhZHTtV5THRHbxo5TEF7KzRVY6RVVEFEUixGNJBnNy5UbYZlTMJWR7lDM7djUzUnYBtyKDx4QBN7bYd5UqBlTMVWeqVFRmFnTDdnUl3EakhWTXxGOGR5QDFEaJhmamVGOnhXehVUUld4L6o4MiF7YsdkY7FEcWlHUl3CaUljYlJUOrREa9JXVQZTbFRFRnZkNqhVeihmZF5mYWlFOnpmQBlke6UlMwdHaZ54YKNVdph5UBdTdH3WUsdVM0xmT9JWZiFTOxVHVxIlNwBlZiojITJCLiQUOGRkM6UkNiojIIJCLzkzNxgDOxYDN0IicfJye=#Qf35VfiUVQLFlI0IyQiwiI7EjL6ByUKBCZhVmcwNlI0IiTis7W0ICZyBlIsISN4EDM7ADIyADMxQjMwIjI0ICdyNkIsISbvNmLzVXajNXZt9iKs2WauMXdpN6cl5mLqIiOiMXbEJCLikXZsh6cBBibpZXZLJiOiEmTDJCLikjN5czMzcDO5kTOzQjNzIiOiQWSiwSfdtlOicGbmJCLlNHbhZmOiI7ckJye0ICbuFkI1pjIEJCLi4TP7hUOM9WV9UWSslUTBtWQ6FTaPRndyRDeWBVax4UUNpET6M6dphUVwF7YK9WQrAHVwhUQ7RnMPVVbzkWURdnWyNEVPJ5ZmhTUvMGMZVENp9EUYR7YrJWZ8okMt34c3tVK";
  ExcelIO.LicenseKey = "GrapeCity-Internal-Use-Only,*.mescius.io|*.mescius.com,364399587337569#B1KJjUhhFSyoVeR5EZ4FleVVDTzxmcyg6MrwGTP5mZtNVUaJ5bQtmSyE6bhZHTtV5THRHbxo5TEF7KzRVY6RVVEFEUixGNJBnNy5UbYZlTMJWR7lDM7djUzUnYBtyKDx4QBN7bYd5UqBlTMVWeqVFRmFnTDdnUl3EakhWTXxGOGR5QDFEaJhmamVGOnhXehVUUld4L6o4MiF7YsdkY7FEcWlHUl3CaUljYlJUOrREa9JXVQZTbFRFRnZkNqhVeihmZF5mYWlFOnpmQBlke6UlMwdHaZ54YKNVdph5UBdTdH3WUsdVM0xmT9JWZiFTOxVHVxIlNwBlZiojITJCLiQUOGRkM6UkNiojIIJCLzkzNxgDOxYDN0IicfJye=#Qf35VfiUVQLFlI0IyQiwiI7EjL6ByUKBCZhVmcwNlI0IiTis7W0ICZyBlIsISN4EDM7ADIyADMxQjMwIjI0ICdyNkIsISbvNmLzVXajNXZt9iKs2WauMXdpN6cl5mLqIiOiMXbEJCLikXZsh6cBBibpZXZLJiOiEmTDJCLikjN5czMzcDO5kTOzQjNzIiOiQWSiwSfdtlOicGbmJCLlNHbhZmOiI7ckJye0ICbuFkI1pjIEJCLi4TP7hUOM9WV9UWSslUTBtWQ6FTaPRndyRDeWBVax4UUNpET6M6dphUVwF7YK9WQrAHVwhUQ7RnMPVVbzkWURdnWyNEVPJ5ZmhTUvMGMZVENp9EUYR7YrJWZ8okMt34c3tVK";
  GC.Spread.Sheets.Designer.LicenseKey = "GrapeCity-Internal-Use-Only,*.mescius.com|*.mescius.io,242684174328899#B1gL5xEOWJlM9klZzIzNLpXOCVHar2SY6I7Uldle6sEcotmSHN7UZpGVvQnc42UWkBlZF9mSr9GVGdXNopHW6lzdwATTBJEMtplc5EmWSx4YTtSazEzMvNzMEBza9pGUE9Gaol4bqVnMvcmS8c4cRFkUnFEavhGdrJGTFVVZyd5YrklTqZWWoNFSJNlV9NkVWd7aHt6a6pFbmFUcDdFbKhjNJpnVvUlY5MkMxUjM9oFVMR7LJ9EOyMVW5glUKhlTHdlZR3EW6pGUxdkURtiSX3kdGJVb0t4UkhWODdmZJpVWmhXY89UOaJGbwQkbZJXWiojITJCLiIzN8kzMBVkNiojIIJCL9UDM4UDMyYzN0IicfJye=#Qf35VfiM5VyQjI0IyQiwiI7EjL6BibvRGZB5icl96ZpNXZE5yUKRWYlJHcTJiOi8kI1tlOiQmcQJCLiEDM5MzNwAiMwATM4IDMyIiOiQncDJCLi2WauMXdpN6cl5mLqwSbvNmLzVXajNXZt9iKiojIz5GRiwiI9VGboNXQg8Wa6V6SiojIh94QiwiI9kDO8IzM4cTM4gjNyQjMiojIklkI1pjIEJCLi4TP7VTU6UGaxdDSZRkezUmeUZjT9d6TypXRMREcQ3ES7UjV8ZzdwlFalVFai3GVNRVUMd5LrBTdCh5Q6xUUJJWaKdWU8UVYHlkWWd7NidkM4IHeoxkazsSMEd4b0pmZZZXMJ9URHplb3p";

  useEffect(async () => {
    if (!template) {
      const template = await (await fetch('./assets/template.sjs', { mode: 'cors' })).blob();
      setTemplate(template);
    }
  });


  return (
    template && 
    <>
      <Designer styleInfo={{ width: `100%`, height: `1000px`, border: `1px solid gray;` }} designerInitialized={(d) => {
        d.setData('isRibbonCollapse', true);
        d.getWorkbook().open(template);

      }}></Designer>
    </>
  )
}


