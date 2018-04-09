//뷰 하나당 컨트롤러를 다 만들려면 너무 빡세니까 뷰 컨트롤러 하나에 화면 하나당 메소드를 만드는 식으로 함.
const Home = class extends Controller {
  constructor(isSingleton) {
    super(isSingleton);
  }
  base(){
    const view = new HomeBaseView(this, true);
    const model = new HomeModel(true);
    return view.render(model);
  }
  $detail(id){

  }
  $remove(id){
    this.$list();// 옵져버로 해야 하지만 여기서는 $list로 하자..
  }
  detail(id) {

  }
  $list(){app.route('home');}
  $detail(id){}
  listen(model){
    switch (true) {
      // case is(model,??):
        
      //   break;
    
      // default:
      //   break;
    }
  }
}
//화면 갱신은 라우터에게만..

    