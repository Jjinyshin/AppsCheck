// describe, it은 Cypress에서 test script를 작성할 때 사용하는 함수임
// it은 테스트 케이스 이름, describe는 테스트 케이스들을 묶어주는 것이라고 생각
describe('출석체크 앱 테스트', () => {
  it('메인 페이지 접속', () => {
    cy.visit('../../index.html')
  })
})