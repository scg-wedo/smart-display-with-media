Smart display HTML, CSS, BOOTSTRAP, JQUERY

---
# วิธีเทส
1. Clone the repository and check out the master branch 
git clone git@github.com:scg-wedo/xp-inno-smart-display.git  

2. download assests ทั้งหมดจาก folder
[scg_assests](https://scgo365.sharepoint.com/sites/RetailTech-DOonly-RetailTechTeam/Shared%20Documents/Forms/AllItems.aspx?csf=1&web=1&e=JGJnqD&OR=Teams%2DHL&CT=1648548253794&params=eyJBcHBOYW1lIjoiVGVhbXMtRGVza3RvcCIsIkFwcFZlcnNpb24iOiIyOC8yMjAzMDcwMTYxMCJ9&cid=e243e72b%2D42c0%2D42bd%2D9da9%2D02a12781d165&FolderCTID=0x012000262A5FE4269AC349AC5C8333F221CA1E&id=%2Fsites%2FRetailTech%2DDOonly%2DRetailTechTeam%2FShared%20Documents%2FDO%20only%20%2D%20Retail%20Tech%20Team%2FSmart%20Display%2FDevelopment&viewid=cb95cf10%2Dfb8e%2D4052%2D8d56%2Db42ea7de2bf2)
3. แตกไฟล์ แล้วนำ sub folder ได้แก่ Floor (SVG), L1_Signage, L2_C&W, L2_Home Selected, L2_Roof มาใส่ในโฟล์เดอร์ intearctive-mode-template/media
4. duplicate ไฟล์ configs.js.prod และ rename เป็น configs.json
5. รัน live server โดยไฟล์จะอยู่ใน intearctive-mode-template/pages/<category>_template1.html

---

## โครงสร้างไฟล์

prefix คือ category แบ่งเป็น ==homeselect== ,  ==roof_== และ ==cw_*==
suffix คือ หน้า page แบ่งเป็น ==template1==, ==template2==, ==product_list==, ==product_detail==

ตัวอย่างเช่น 
home_select_template1.html คือ หน้า template1 ของ category home select
cw_product_list.html คือ หน้า product_list ของ category ceiling and wall