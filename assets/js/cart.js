
// Скрипт выбора типов розы (выделени блока зеленым + смена фото розы)
$('.cart-options__item_type').click(function(){

  $('.cart-options__item_type')
  .removeClass('cart-options__item_selected')
  .find('.cart-options__item-btn')
  .removeClass('cart-options__item-btn_selected')
  .text('Выбрать');

  $(this).addClass('cart-options__item_selected')
  .find('.cart-options__item-btn')
  .addClass('cart-options__item-btn_selected')
  .text('Выбрано');

  // Меняем фото розы в зависимости какой блок был нажат
  let roseType =  $(this).data('rose');
  $('.cart-options__photo').addClass('cart-options__photo_hidden');
  $('.cart-options__photo' + '[data-rose=' +  roseType + ']')
  .removeClass('cart-options__photo_hidden');

  // Разблокируем блок с выбором цвета розы
  $('.cart-options__colors').css({'opacity':1});
  $('.cart-options__item_colors').addClass('cart-options__item_active');

});



// Скрипт выделения кнопки в блоке ЭФФЕКТНЫЕ ДОПОЛНЕНИЯ К РОЗЕ
$('#wow-box').click(function(){

  let selectedText =  '<img src="img/icon-checked-black.svg" width="11" height="11" alt="">' + $(this).data('selected');

  if ( $(this).hasClass('cart-addons__item-btn_selected') ) {
    $(this).removeClass('cart-addons__item-btn_selected').text( $(this).data('not-selected') );
  } else {
    $(this).addClass('cart-addons__item-btn_selected').html(selectedText);
  }

});


// Вывод описания типа розы при клике по блокам (mini, premium, king)
$('.cart-options__item_type').click(function(){
  let curRoseType = $(this).data('rose');
  $('.cart-options__rose-type').removeClass('cart-options__rose-type_active');
  $(`.cart-options__rose-type[data-rose="${curRoseType}"]`).addClass('cart-options__rose-type_active');
});
