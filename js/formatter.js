const formatData = () => {
  //Number Format Code
  const ids = [
    "banners_number",
    "impressions_social_number",
    "commercials_number",
    "searches_number",
    "engagements_social_number",
    "visitors_number_1",
    "visitors_number_2",
    "leads_number_1",
    "leads_number_2"
  ];
  const paymentIds = [
    "cost_good",
    "cost_better",
    "cost_best",
    "cost_domination",
  ];
  //Function to Format Numbers

  //US Payment Numbers Formatting
  formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });
  //List of id's
  const idMapping =
    ids &&
    ids.map((id) => {
      const getValue = $(`#${id}`).text();
      const formattedNumber = numberWithCommas(getValue);
      $(`#${id}`).text(formattedNumber);
    });
  const paymentIdMapping =
    paymentIds &&
    paymentIds.map((id) => {
      const getValue = $(`#${id}`).text();
      const formattedNumber = formatter.format(getValue);
      $(`#${id}`).text(formattedNumber);
    });
}