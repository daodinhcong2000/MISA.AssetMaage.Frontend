import $ from 'jquery'

const contextMenu = {
    /**
     * Hiển thị context menu theo từng dòng của table
     * createdBy: DDCONG(28/03/2021)
     */
    showContextMenuWithTable() {
        var $contextMenu = $("#contextMenu");
        $("body").on("contextmenu", "table tbody tr", function (e) {
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
     * createdBy: DDCONG(28/03/2021)
     */
    hideContextMenu() {
        var $contextMenu = $("#contextMenu");
        $('html').click(function () {
            $contextMenu.hide();
        });
    }
}

export default contextMenu;