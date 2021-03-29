import $ from 'jquery'

const contextMenu = {
    /**
     * Hiển thị context menu theo từng dòng của table
     * createdBy: 
     */
    showContextMenuWithTable() {
        var $contextMenu = $("#contextMenu");

        $("body").on("contextmenu", "table tbody tr", function (e) {
            // lấy ra dữ liệu ở cột thứ nhất của dòng hiện tại
            // var tdValue = $(e.currentTarget).children()[1].innerText;
            // var object = me.assets.filter(x=>x.AssetCode == tdValue)[0];
            // me.contextUpdate = object;
            // me.idOnDelete = object.AssetId;
            $contextMenu.css({
                display: "block",
                left: e.pageX,
                top: e.pageY
            });
            return false;
        });

    },

    /**
     * Ẩn context menu
     * createdBy:
     */
    hideContextMenu() {
        var $contextMenu = $("#contextMenu");
        $('html').click(function () {
            $contextMenu.hide();
        });
    }
}

export default contextMenu;