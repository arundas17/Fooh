//view more btn for admin notification starts here
if (document.querySelector(".fooh-notification-order")) {
  let total_notifications = document.querySelectorAll(
    ".fooh-notification-order"
  );
  total_notifications = [...total_notifications];

  const fooh_notification__btns = document.querySelector(
    ".fooh-notification__btn-wrapper"
  );

  const slice_count = parseInt(
    fooh_notification__btns.getAttribute("data-notification-load-more-count")
  );

  let load_more_count = slice_count;

  const slice_count_min = parseInt(
    fooh_notification__btns.getAttribute("data-notification-load-less-count")
  );
  const default_count = parseInt(
    fooh_notification__btns.getAttribute("data-notification-defult-count")
  );

  let visible_notifications = total_notifications.slice(0, default_count);
  //hides all notifications
  function hideNotifications(numbers) {
    numbers.forEach((item) => {
      item.classList.add("hidden");
      item.classList.remove("visible");
    });
  }
  total_notifications.forEach((item) => item.classList.add("hidden"));
  //unhides the notifications
  function unhideNotification(numbers) {
    numbers.forEach((item) => {
      item.classList.remove("hidden");
      item.classList.add("visible");
    });
  }
  unhideNotification(visible_notifications);

  function loadBtnControll() {
    if (visible_notifications.length > default_count) {
      fooh_notification__btns
        .querySelector(".fooh-btn--load-less")
        .classList.add("visible");
      fooh_notification__btns
        .querySelector(".fooh-btn--load-more")
        .classList.add("visible");
      if (visible_notifications.length === total_notifications.length) {
        fooh_notification__btns
          .querySelector(".fooh-btn--load-more")
          .classList.remove("visible");
      }
    } else {
      fooh_notification__btns
        .querySelector(".fooh-btn--load-less")
        .classList.remove("visible");
      fooh_notification__btns
        .querySelector(".fooh-btn--load-more")
        .classList.add("visible");
      if (visible_notifications.length <= default_count) {
        fooh_notification__btns
          .querySelector(".fooh-btn--load-more")
          .classList.add("visible");
      }
    }
    console.log(total_notifications.length);
    console.log(visible_notifications.length);
  }

  loadBtnControll();

  fooh_notification__btns.addEventListener("click", (e) => {
    e.preventDefault();
    if (
      e.target.classList.contains("fooh-btn--load-more") &&
      visible_notifications.length != total_notifications.length
    ) {
      load_more_count += default_count;
      visible_notifications = total_notifications.slice(0, load_more_count);
      unhideNotification(visible_notifications);
      loadBtnControll();
    } else if (
      e.target.classList.contains("fooh-btn--load-less") &&
      visible_notifications.length > default_count
    ) {
      load_more_count -= slice_count_min;
      visible_notifications = total_notifications.slice(0, load_more_count);
      hideNotifications(visible_notifications);
      loadBtnControll();
    }
  });
}

//view more btn for admin notification ends here
