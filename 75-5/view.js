const View = class{
  constructor() {


  }
  render(model = null){override();}
}

const HomeBaseView = class extends View {
  constructor(controller, isSingleton) {
    super(controller, isSingleton);
  }
  render(model = err()){
    // view...
    // ['click', _=>ctrl.$detail......] //$이 붙은 함수는 뷰용 함수다...라는 암묵지..
  }
};


const HomeDetailView = class extends View {
  constructor(controller,isSingleton){
    super(controller,isSingleton);
  }
  render(model = err()){
    //detail 렌더링 코드.. 삭제, 목록 버튼 정의 등.
  }
};

// MVC 의 고통... 뷰가 모델을 잘 알고 있기 때문에 로직이 바뀌면 뷰도 다 바뀌어야 함.
// 따라서 뷰와 모델 .... 양 쪽에 작업량이 많아짐..
// api를 쓰려고 하는 이유는 json 객체는 그대로 놔두고... 로직만 바꾸면 되기 때문에...
// 뷰 로직이 아예 없어...  뷰와 모델의 영향을 디커플링 하기 위한 노력...에 따라서
// MVP, MVVM 등이 나옴...


// 모델은 사장님. 이사님. 콘트롤러는 부장,과장. 뷰는 사원,대리...랄까...
// MVC 는 사장님이 하라는대로 하는 과장....



// MVP .. 뷰는 getter setter 로 자기 사양을 다 노출하고 있고..
// 콘트롤러는 그 getter setter 를 호출하기만 함...
// 화면이 생길 때마다 getter setter 를 무지막지 하게 만들어야 함.
// 다만 툴들이 getter setter 를 다 만들어줌... 이런 툴을 갖고 있는 언어들은 
// 다 지원함. 비쥬얼 스튜디오 등.
// 사람이 할 짓은 아님... 뷰가 뒤에 컨트롤러가 없어도 테스트 할 수 있음...
// 비쥬얼 에디트를 제공할 수 있음...... 아이폰 , 등등...


// MVVM 뷰모델이 뷰와 상호작용하는 모델.. 뷰가 모델을 직접 알지 않고 VM 만 모델을 알 수 있게 함.
// anchorPoint 를 통해서 뷰만의 선언 필드 이름..뷰를 업데이트 하기 위한 전용 이름들..
// 뷰에 맞는 모델... 
// 마찬가지로 바인딩하는 엔진이 있어야 함.... 


