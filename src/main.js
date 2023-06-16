import {createApp} from 'vue';
import App from './App.vue';
import router from './router';
import PrimeVue from 'primevue/config';
import AutoComplete from 'primevue/autocomplete';
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';
import Avatar from 'primevue/avatar';
import AvatarGroup from 'primevue/avatargroup';
import Badge from 'primevue/badge';
import BadgeDirective from 'primevue/badgedirective';
import Button from 'primevue/button';
import Breadcrumb from 'primevue/breadcrumb';
import BlockUI from 'primevue/blockui';
import Calendar from 'primevue/calendar';
import Card from 'primevue/card';
import Carousel from 'primevue/carousel';

import Checkbox from 'primevue/checkbox';
import Chip from 'primevue/chip';
import Chips from 'primevue/chips';
import ColorPicker from 'primevue/colorpicker';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';
import Row from 'primevue/row';
import ConfirmDialog from 'primevue/confirmdialog';
import ConfirmPopup from 'primevue/confirmpopup';
import ConfirmationService from 'primevue/confirmationservice';
import ContextMenu from 'primevue/contextmenu';
import DataTable from 'primevue/datatable';
import DataView from 'primevue/dataview';
import DataViewLayoutOptions from 'primevue/dataviewlayoutoptions';
import Dialog from 'primevue/dialog';
import Divider from 'primevue/divider';
import Dropdown from 'primevue/dropdown';
import Fieldset from 'primevue/fieldset';
import FileUpload from 'primevue/fileupload';

import Galleria from 'primevue/galleria';
import Image from 'primevue/image';
import InlineMessage from 'primevue/inlinemessage';
import Inplace from 'primevue/inplace';
import InputMask from 'primevue/inputmask';
import InputNumber from 'primevue/inputnumber';
import InputSwitch from 'primevue/inputswitch';
import InputText from 'primevue/inputtext';
import Knob from 'primevue/knob';
import Listbox from 'primevue/listbox';
import MegaMenu from 'primevue/megamenu';
import Menu from 'primevue/menu';
import Menubar from 'primevue/menubar';
import Message from 'primevue/message';
import MultiSelect from 'primevue/multiselect';
import OrderList from 'primevue/orderlist';
import OrganizationChart from 'primevue/organizationchart';
import OverlayPanel from 'primevue/overlaypanel';
import Paginator from 'primevue/paginator';
import Panel from 'primevue/panel';
import PanelMenu from 'primevue/panelmenu';
import Password from 'primevue/password';
import PickList from 'primevue/picklist';
import ProgressBar from 'primevue/progressbar';
import Rating from 'primevue/rating';
import RadioButton from 'primevue/radiobutton';
import Ripple from 'primevue/ripple';
import SelectButton from 'primevue/selectbutton';
import ScrollPanel from 'primevue/scrollpanel'
import ScrollTop from 'primevue/scrolltop';
import Slider from 'primevue/slider';
import Sidebar from 'primevue/sidebar';
import Skeleton from 'primevue/skeleton';
import SpeedDial from 'primevue/speeddial';
import SplitButton from 'primevue/splitbutton';
import Splitter from 'primevue/splitter';
import SplitterPanel from 'primevue/splitterpanel';
import Steps from 'primevue/steps';
import TabMenu from 'primevue/tabmenu';
import Tag from 'primevue/tag';
import TieredMenu from 'primevue/tieredmenu';
import Textarea from 'primevue/textarea';
import Timeline from 'primevue/timeline';
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';
import Toolbar from 'primevue/toolbar';
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
import Tooltip from 'primevue/tooltip';
import ToggleButton from 'primevue/togglebutton';
import Tree from 'primevue/tree';
import TreeSelect from 'primevue/treeselect';
import TreeTable from 'primevue/treetable';
import TriStateCheckbox from 'primevue/tristatecheckbox';
import './App.scss';

const app = createApp(App);

app.use(PrimeVue, {
    locale: {
        startsWith: 'Başlangıcı',
        contains: 'İçeren',
        notContains: 'İçermeyen',
        endsWith: 'Sonuyla biten',
        equals: 'Eşit',
        notEquals: 'Eşit değil',
        noFilter: 'Filtre Yok',
        filter: 'Filtrele',
        lt: 'Daha küçük',
        lte: 'Küçük veya eşit',
        gt: 'Daha büyük',
        gte: 'Büyük veya eşit',
        dateIs: 'Tarih',
        dateIsNot: 'Tarih değil',
        dateBefore: 'Tarih öncesinde',
        dateAfter: 'Tarih sonrasında',
        custom: 'Özel',
        clear: 'Temizle',
        apply: 'Uygula',
        matchAll: 'Hepsini eşleştir',
        matchAny: 'Herhangi birini eşleştir',
        addRule: 'Kural ekle',
        removeRule: 'Kuralı kaldır',
        accept: 'Evet',
        reject: 'Hayır',
        choose: 'Seç',
        upload: 'Yükle',
        cancel: 'İptal',
        completed: 'Tamamlandı',
        pending: 'Bekliyor',
        dayNames: ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'],
        dayNamesShort: ['Paz', 'Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt'],
        dayNamesMin: ['Pa', 'Pt', 'Sa', 'Ça', 'Pe', 'Cu', 'Ct'],
        monthNames: ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'],
        monthNamesShort: ['Oca', 'Şub', 'Mar', 'Nis', 'May', 'Haz', 'Tem', 'Ağu', 'Eyl', 'Eki', 'Kas', 'Ara'],
        chooseYear: 'Yıl seçin',
        chooseMonth: 'Ay seçin',
        chooseDate: 'Tarih seçin',
        prevDecade: 'Önceki Onyıl',
        nextDecade: 'Sonraki Onyıl',
        prevYear: 'Önceki Yıl',
        nextYear: 'Sonraki Yıl',
        prevMonth: 'Önceki Ay',
        nextMonth: 'Sonraki Ay',
        prevHour: 'Önceki Saat',
        nextHour: 'Sonraki Saat',
        prevMinute: 'Önceki Dakika',
        nextMinute: 'Sonraki Dakika',
        prevSecond: 'Önceki Saniye',
        nextSecond: 'Sonraki Saniye',
        am: 'am',
        pm: 'pm',
        today: 'Bugün',
        weekHeader: 'Hf',
        firstDayOfWeek: 0,
        dateFormat: 'mm/dd/yy',
        weak: 'Zayıf',
        medium: 'Orta',
        strong: 'Güçlü',
        passwordPrompt: 'Bir şifre girin',
        emptyFilterMessage: 'Sonuç bulunamadı',
        searchMessage: '{0} sonuç bulundu',
        selectionMessage: '{0} öğe seçildi',
        emptySelectionMessage: 'Seçili öğe yok',
        emptySearchMessage: 'Sonuç bulunamadı',
        emptyMessage: 'Kullanılabilir seçenek yok',
        aria: {
            trueLabel: 'Doğru',
            falseLabel: 'Yanlış',
            nullLabel: 'Seçilmedi',
            star: '1 yıldız',
            stars: '{star} yıldız',
            selectAll: 'Tüm öğeler seçildi',
            unselectAll: 'Tüm öğeler seçimi kaldırıldı',
            close: 'Kapat',
            previous: 'Önceki',
            next: 'Sonraki',
            navigation: 'Gezinme',
            scrollTop: 'En Üste Git',
            moveTop: 'En Üste Taşı',
            moveUp: 'Yukarı Taşı',
            moveDown: 'Aşağı Taşı',
            moveBottom: 'En Alta Taşı',
            moveToTarget: 'Hedefe Taşı',
            moveToSource: 'Kaynağa Taşı',
            moveAllToTarget: 'Tümünü Hedefe Taşı',
            moveAllToSource: 'Tümünü Kaynağa Taşı',
            pageLabel: '{page}',
            firstPageLabel: 'İlk Sayfa',
            lastPageLabel: 'Son Sayfa',
            nextPageLabel: 'Sonraki Sayfa',
            previousPageLabel: 'Önceki Sayfa',
            rowsPerPageLabel: 'Sayfa başına satır',
            jumpToPageDropdownLabel: 'Sayfaya Gitme Seçimi',
            jumpToPageInputLabel: 'Sayfaya Gitme Girişi',
            selectRow: 'Satır Seçildi',
            unselectRow: 'Satır Seçimi Kaldırıldı',
            expandRow: 'Satır Genişletildi',
            collapseRow: 'Satır Daraltıldı',
            showFilterMenu: 'Filtre Menüsünü Göster',
            hideFilterMenu: 'Filtre Menüsünü Gizle',
            filterOperator: 'Filtre Operatörü',
            filterConstraint: 'Filtre Kısıtı',
            editRow: 'Satır Düzenle',
            saveEdit: 'Düzenlemeyi Kaydet',
            cancelEdit: 'Düzenlemeyi İptal Et',
            listView: 'Liste Görünümü',
            gridView: 'Izgara Görünümü',
            slide: 'Kaydır',
            slideNumber: '{slideNumber}',
            zoomImage: 'Resmi Yakınlaştır',
            zoomIn: 'Yakınlaştır',
            zoomOut: 'Uzaklaştır',
            rotateRight: 'Sağa Döndür',
            rotateLeft: 'Sola Döndür'
        }
    }
});
app.use(ConfirmationService);
app.use(ToastService);
app.use(router);

app.directive('tooltip', Tooltip);
app.directive('ripple', Ripple);
app.directive('badge', BadgeDirective);

app.component('Accordion', Accordion);
app.component('AccordionTab', AccordionTab);
app.component('AutoComplete', AutoComplete);
app.component('Avatar', Avatar);
app.component('AvatarGroup', AvatarGroup);
app.component('Badge', Badge);
app.component('Breadcrumb', Breadcrumb);
app.component('Button', Button);
app.component('BlockUI', BlockUI);
app.component('Calendar', Calendar);
app.component('Card', Card);
app.component('Carousel', Carousel);

app.component('Checkbox', Checkbox);
app.component('Chip', Chip);
app.component('Chips', Chips);
app.component('ColorPicker', ColorPicker);
app.component('Column', Column);
app.component('ColumnGroup', ColumnGroup);
app.component('Row', Row);
app.component('ConfirmDialog', ConfirmDialog);
app.component('ConfirmPopup', ConfirmPopup);
app.component('ContextMenu', ContextMenu);
app.component('DataTable', DataTable);
app.component('DataView', DataView);
app.component('DataViewLayoutOptions', DataViewLayoutOptions);
app.component('Dialog', Dialog);
app.component('Divider', Divider);
app.component('Dropdown', Dropdown);
app.component('Fieldset', Fieldset);
app.component('FileUpload', FileUpload);

app.component('Galleria', Galleria);
app.component('Image', Image);
app.component('InlineMessage', InlineMessage);
app.component('Inplace', Inplace);
app.component('InputMask', InputMask);
app.component('InputNumber', InputNumber);
app.component('InputSwitch', InputSwitch);
app.component('InputText', InputText);
app.component('Knob', Knob);
app.component('Listbox', Listbox);
app.component('MegaMenu', MegaMenu);
app.component('Menu', Menu);
app.component('Menubar', Menubar);
app.component('Message', Message);
app.component('MultiSelect', MultiSelect);
app.component('OrderList', OrderList);
app.component('OrganizationChart', OrganizationChart);
app.component('OverlayPanel', OverlayPanel);
app.component('Paginator', Paginator);
app.component('Panel', Panel);
app.component('PanelMenu', PanelMenu);
app.component('Password', Password);
app.component('PickList', PickList);
app.component('ProgressBar', ProgressBar);
app.component('RadioButton', RadioButton);
app.component('Rating', Rating);
app.component('SelectButton', SelectButton);
app.component('ScrollPanel', ScrollPanel);
app.component('ScrollTop', ScrollTop);
app.component('Slider', Slider);
app.component('Sidebar', Sidebar);
app.component('Skeleton', Skeleton);
app.component('SpeedDial', SpeedDial);
app.component('SplitButton', SplitButton);
app.component('Splitter', Splitter);
app.component('SplitterPanel', SplitterPanel);
app.component('Steps', Steps);
app.component('TabMenu', TabMenu);
app.component('TabView', TabView);
app.component('TabPanel', TabPanel);
app.component('Tag', Tag);
app.component('Textarea', Textarea);
app.component('TieredMenu', TieredMenu);
app.component('Timeline', Timeline);
app.component('Toast', Toast);
app.component('Toolbar', Toolbar);
app.component('ToggleButton', ToggleButton);
app.component('Tree', Tree);
app.component('TreeSelect', TreeSelect);
app.component('TreeTable', TreeTable);
app.component('TriStateCheckbox', TriStateCheckbox);

app.mount('#app')