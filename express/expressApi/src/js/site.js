// Write your Javascript code.
(function () {
    $(".launchApp").on("click", function (obj, obj2, obj3) {
        //obj.preventDefault();
        var targetId = obj.currentTarget.dataset.targetid;
        var data = { id:targetId };
        $.ajax({
            type: "POST",
            url: rootUrl + "/start",
            data: data,
            success: function (data) {
                alert("Success");
            }
        });
        return false;
    });
})();
