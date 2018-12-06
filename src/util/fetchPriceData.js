const fetchPriceData = price => {
   fetch(
      'https://data.winnipeg.ca/resource/94a6-v8ue.json?$where=total_assessed_value>' +
         price +
         '&property_class_1=RESIDENTIAL%201&$$app_token=APP_TOKEN'
   )
      .then(res => res.json())
      .then(res => {
         return res.filter(data => {
            return data.property_use_code.includes('RESSD');
         });
      })
      .then(filteredData => console.table(filteredData));
};

export default fetchPriceData;
