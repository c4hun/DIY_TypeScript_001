enum TeaType {
  Oolong,
  Paochung,
  Kuanyin,
  Puer,
  Jasmin,
}
interface Order {
  customerName: string;
  teaType: TeaType;
}

let order: Order = {
  customerName: "Lee",
  teaType: TeaType.Jasmin,
};
switch (order.teaType) {
  case TeaType.Oolong:
    console.log(
      `正在準備：${order.customerName}先生/小姐的烏龍茶、しばらく、おチャをお待ちになって伺わせますか＾＾？`
    );
    break;
  case TeaType.Paochung:
    console.log(
      `正在準備：${order.customerName}先生/小姐的包種茶、しばらく、おチャをお待ちになって伺わせますか＾＾？`
    );
    break;
  case TeaType.Kuanyin:
    console.log(
      `正在準備：${order.customerName}先生/小姐的鐵觀音茶、しばらく、おチャをお待ちになって伺わせますか＾＾？`
    );
    break;
  case TeaType.Puer:
    console.log(
      `正在準備：${order.customerName}先生/小姐的普洱茶、しばらく、おチャをお待ちになって伺わせますか＾＾？`
    );
    break;
  case TeaType.Jasmin:
    console.log(
      `正在準備：${order.customerName}先生/小姐的香片綠茶、しばらく、おチャをお待ちになって伺わせますか＾＾？`
    );
    break;
}
