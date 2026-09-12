const PERFIL_KEYS = ["bitola", "massa", "d", "bf", "tf", "tw", "h", "A", "Ix", "Wx", "rx", "Zx", "Iy", "Wy", "ry", "Zy", "mrdCat", "qvrdCat"];
const PERFIS_RAW = [
 ["W 150 x 13,0",13.0,148.0,100.0,4.9,4.3,138.0,16.6,635.0,85.8,6.18,96.4,82.0,16.4,2.22,25.5,1.97,15.97],
 ["W 150 x 18,0",18.0,153.0,102.0,7.1,5.8,139.0,23.4,939.0,122.8,6.34,139.4,126.0,24.7,2.32,38.5,2.91,22.27],
 ["W 150 x 22,5 (H)",22.5,152.0,152.0,6.6,5.8,139.0,29.0,1229.0,161.7,6.51,179.6,387.0,50.9,3.65,77.9,3.58,22.12],
 ["W 150 x 24,0",24.0,160.0,102.0,10.3,6.6,139.0,31.5,1384.0,173.0,6.63,197.6,183.0,35.9,2.41,55.8,4.13,26.5],
 ["W 150 x 29,8*",29.8,157.0,153.0,9.3,6.6,138.0,38.5,1739.0,221.5,6.72,247.5,556.0,72.6,3.8,110.8,5.18,26.0],
 ["W 150 x 37,1*",37.1,162.0,154.0,11.6,8.1,139.0,47.8,2244.0,277.0,6.85,313.5,707.0,91.8,3.84,140.8,6.56,32.92],
 ["W 200 x 15,0",15.0,200.0,100.0,5.2,4.3,190.0,19.4,1305.0,130.5,8.2,147.9,87.0,17.4,2.12,27.3,3.07,21.58],
 ["W 200 x 19,3",19.3,203.0,102.0,6.5,5.8,190.0,25.1,1686.0,166.1,8.19,190.6,116.0,22.7,2.14,35.9,3.99,29.54],
 ["W 200 x 22,5",22.5,206.0,102.0,8.0,6.2,190.0,29.0,2029.0,197.0,8.37,225.5,142.0,27.9,2.22,43.9,4.72,32.05],
 ["W 200 x 26,6",26.6,207.0,133.0,8.4,5.8,190.0,34.2,2611.0,252.3,8.73,282.6,330.0,49.6,3.1,76.3,5.91,30.12],
 ["W 200 x 31,3",31.3,210.0,134.0,10.2,6.4,190.0,40.3,3168.0,301.7,8.86,338.6,410.0,61.2,3.19,94.0,7.08,33.72],
 ["W 200 x 35,9 (H)",35.9,201.0,165.0,10.2,6.2,181.0,45.7,3437.0,342.0,8.67,379.2,764.0,92.6,4.09,141.0,7.93,31.27],
 ["W 200 x 41,7 (H)",41.7,205.0,166.0,11.8,7.2,181.0,53.5,4114.0,401.5,8.77,448.6,901.0,108.5,4.1,165.7,9.38,37.03],
 ["W 200 x 46,1 (H)",46.1,203.0,203.0,11.0,7.2,181.0,58.6,4543.0,447.6,8.81,495.3,1535.0,151.2,5.12,229.5,10.36,36.67],
 ["W 200 x 52,0 (H)",52.0,206.0,204.0,12.6,7.9,181.0,66.9,5298.0,514.4,8.9,572.5,1784.0,174.9,5.18,265.8,11.97,40.83],
 ["HP 200 x 53,0 (H)",53.0,204.0,207.0,11.3,11.3,181.0,68.1,4977.0,488.0,8.55,551.3,1673.0,161.7,4.96,248.6,11.53,57.84],
 ["W 200 x 59,0 (H)",59.0,210.0,205.0,14.2,9.1,182.0,76.0,6140.0,584.8,8.99,655.9,2041.0,199.1,5.16,303.0,13.71,47.95],
 ["W 200 x 71,0 (H)",71.0,216.0,206.0,17.4,10.2,181.0,91.0,7660.0,709.2,9.17,803.2,2537.0,246.3,5.28,374.5,16.79,55.28],
 ["W 200 x 86,0 (H)",86.0,222.0,209.0,20.6,13.0,181.0,110.9,9498.0,855.7,9.26,984.2,3139.0,300.4,5.32,458.7,20.58,72.41],
 ["W 200 x 100,0 (H)",100.0,229.0,210.0,23.7,14.5,182.0,127.1,11355.0,991.7,9.45,1152.2,3664.0,349.0,5.37,533.4,24.09,83.31],
 ["W 250 x 17,9",17.9,251.0,101.0,5.3,4.8,240.0,23.1,2291.0,182.6,9.96,211.0,91.0,18.1,1.99,28.8,4.38,30.23],
 ["W 250 x 22,3",22.3,254.0,102.0,6.9,5.8,240.0,28.9,2939.0,231.4,10.09,267.7,123.0,24.1,2.06,38.4,5.6,36.96],
 ["W 250 x 25,3",25.3,257.0,102.0,8.4,6.1,240.0,32.6,3473.0,270.2,10.31,311.1,149.0,29.3,2.14,46.4,6.5,39.34],
 ["W 250 x 28,4",28.4,260.0,102.0,10.0,6.4,240.0,36.6,4046.0,311.2,10.51,357.3,178.0,34.8,2.2,54.9,7.47,41.75],
 ["W 250 x 32,7",32.7,258.0,146.0,9.1,6.1,240.0,42.1,4937.0,382.7,10.83,428.5,473.0,64.8,3.35,99.7,8.96,39.49],
 ["W 250 x 38,5",38.5,262.0,147.0,11.2,6.6,240.0,49.6,6057.0,462.4,11.05,517.8,594.0,80.8,3.46,124.1,10.83,43.39],
 ["W 250 x 44,8",44.8,266.0,148.0,13.0,7.6,240.0,57.6,7158.0,538.2,11.15,606.3,704.0,95.1,3.5,146.4,12.68,50.72],
 ["HP 250 x 62,0 (H)",62.0,246.0,256.0,10.7,10.5,225.0,79.6,8728.0,709.6,10.47,790.5,2995.0,234.0,6.13,357.8,15.58,64.81],
 ["W 250 x 73,0 (H)",73.0,253.0,254.0,14.2,8.6,225.0,92.7,11257.0,889.9,11.02,983.3,3880.0,305.5,6.47,463.1,20.56,54.59],
 ["W 250 x 80,0 (H)",80.0,256.0,255.0,15.6,9.4,225.0,101.9,12550.0,980.5,11.1,1088.7,4313.0,338.3,6.51,513.1,22.76,60.38],
 ["HP 250 x 85,0 (H)",85.0,254.0,260.0,14.4,14.4,225.0,108.5,12280.0,966.9,10.64,1093.2,4225.0,325.0,6.24,499.6,22.86,91.77],
 ["W 250 x 89,0 (H)",89.0,260.0,256.0,17.3,10.7,225.0,113.9,14237.0,1095.1,11.18,1224.4,4841.0,378.2,6.52,574.3,25.6,69.8],
 ["W 250 x 101,0 (H)",101.0,264.0,257.0,19.6,11.9,225.0,128.7,16352.0,1238.8,11.27,1395.0,5549.0,431.8,6.57,656.3,29.17,78.83],
 ["W 250 x 115,0 (H)",115.0,269.0,259.0,22.1,13.5,225.0,146.1,18920.0,1406.7,11.38,1597.4,6405.0,494.6,6.62,752.7,33.4,91.12],
 ["W 250 x 131,0 (H)",131.0,275.0,261.0,25.1,15.4,225.0,167.8,22243.0,1617.7,11.51,1855.6,7448.0,570.7,6.66,870.7,38.8,106.26],
 ["W 250 x 149,0 (H)",149.0,282.0,263.0,28.4,17.3,225.0,190.5,26027.0,1845.9,11.69,2137.5,8624.0,655.8,6.73,1001.7,44.69,122.41],
 ["W 250 x 167,0 (H)",167.0,289.0,265.0,31.8,19.2,225.0,214.0,30110.0,2083.7,11.86,2435.3,9880.0,745.7,6.79,1140.2,50.92,139.22],
 ["W 310 x 21,0",21.0,303.0,101.0,5.7,5.1,292.0,27.2,3776.0,249.2,11.77,291.9,98.0,19.5,1.9,31.4,6.1,38.77],
 ["W 310 x 23,8",23.8,305.0,101.0,6.7,5.6,292.0,30.7,4346.0,285.0,11.89,333.2,116.0,22.9,1.94,36.9,6.97,42.86],
 ["W 310 x 28,3",28.3,309.0,102.0,8.9,6.0,291.0,36.5,5500.0,356.0,12.28,412.0,158.0,31.0,2.08,49.4,8.61,46.52],
 ["W 310 x 32,7",32.7,313.0,102.0,10.8,6.6,291.0,42.1,6570.0,419.8,12.49,485.3,192.0,37.6,2.13,59.8,10.15,51.83],
 ["W 310 x 38,7",38.7,310.0,165.0,9.7,5.8,291.0,49.7,8581.0,553.6,13.14,615.4,727.0,88.1,3.82,134.9,12.87,45.11],
 ["W 310 x 44,5",44.5,313.0,166.0,11.2,6.6,291.0,57.2,9997.0,638.8,13.22,712.8,855.0,103.0,3.87,158.0,14.9,51.83],
 ["W 310 x 52,0",52.0,317.0,167.0,13.2,7.6,291.0,67.0,11909.0,751.4,13.33,842.5,1026.0,122.9,3.91,188.8,17.62,60.45],
 ["W 310 x 60,0",60.0,303.0,203.0,13.1,7.5,277.0,76.1,12908.0,852.0,13.02,944.3,1829.0,226.7,4.9,275.4,19.74,57.02],
 ["W 310 x 67,0",67.0,306.0,204.0,14.6,8.5,277.0,85.3,14559.0,951.5,13.06,1060.4,2069.0,202.8,4.92,310.5,22.17,65.26],
 ["W 310 x 74,0",74.0,310.0,205.0,16.3,9.4,277.0,95.1,16501.0,1064.6,13.17,1192.0,2344.0,180.2,4.96,350.5,24.92,73.11],
 ["HP 310 x 79,0 (H)",79.0,299.0,306.0,11.0,11.0,277.0,100.0,16316.0,1091.3,12.77,1210.1,5258.0,343.7,7.25,525.4,22.84,82.52],
 ["HP 310 x 93,0 (H)",93.0,303.0,308.0,13.1,13.1,277.0,119.2,19682.0,1299.1,12.85,1450.3,6387.0,414.7,7.32,635.5,28.71,99.59],
 ["W 310 x 97,0 (H)",97.0,308.0,305.0,15.4,9.9,277.0,123.6,22284.0,1447.0,13.43,1594.2,7286.0,477.8,7.68,725.0,32.89,76.51],
 ["W 310 x 107,0 (H)",107.0,311.0,306.0,17.0,10.9,277.0,136.4,24839.0,1597.3,13.49,1768.2,8123.0,530.9,7.72,806.1,36.97,85.06],
 ["HP 310 x 110,0 (H)",110.0,308.0,310.0,15.5,15.4,277.0,141.0,23703.0,1539.1,12.97,1730.6,7707.0,497.3,7.39,763.7,35.61,119.01],
 ["W 310 x 117,0 (H)",117.0,314.0,307.0,18.7,11.9,277.0,149.9,27563.0,1755.6,13.56,1952.6,9024.0,587.9,7.76,893.1,40.83,93.75],
 ["HP 310 x 125,0 (H)",125.0,312.0,312.0,17.4,17.4,277.0,159.0,27076.0,1735.6,13.05,1963.3,8823.0,565.6,7.45,870.6,41.05,136.21],
 ["W 310 x 129,0 (H)",129.0,318.0,308.0,20.6,13.1,277.0,165.4,30819.0,1938.3,13.65,2167.6,10039.0,651.9,7.79,991.2,45.32,104.52],
 ["HP 310 x 132,0 (H)",132.0,314.0,313.0,18.3,18.3,277.0,167.5,28731.0,1830.0,13.1,2075.5,9371.0,598.8,7.48,922.4,43.4,144.18],
 ["W 310 x 143,0 (H)",143.0,323.0,309.0,22.9,14.0,277.0,182.5,34812.0,2155.6,13.81,2422.2,11270.0,729.4,7.86,1109.2,50.65,113.46],
 ["W 310 x 158,0 (H)",158.0,327.0,310.0,25.1,15.5,277.0,200.7,38681.0,2365.8,13.88,2675.7,12474.0,804.8,7.88,1225.2,55.95,127.17],
 ["W 310 x 179,0 (H)",179.0,333.0,313.0,28.1,18.0,277.0,227.9,44580.0,2677.5,13.99,3056.2,14378.0,918.7,7.94,1401.7,63.94,150.39],
 ["W 310 x 202,0 (H)",202.0,341.0,315.0,31.8,20.1,277.0,258.3,52030.0,3051.6,14.19,3513.7,16589.0,1053.2,8.01,1608.7,73.47,171.98],
 ["W 360 x 32,9",32.9,349.0,127.0,8.5,5.8,332.0,42.1,8358.0,479.0,14.09,547.6,291.0,45.9,2.63,72.0,11.45,50.79],
 ["W 360 x 39,0",39.0,353.0,128.0,10.7,6.5,332.0,50.2,10331.0,585.3,14.35,667.7,375.0,58.6,2.73,91.9,13.96,57.57],
 ["W 360 x 44,6",44.6,352.0,171.0,9.8,6.9,332.0,57.7,12258.0,696.5,14.58,784.3,818.0,95.7,3.77,148.0,16.4,60.94],
 ["W 360 x 51,0",51.0,355.0,171.0,11.6,7.2,332.0,64.8,14222.0,801.2,14.81,899.5,968.0,113.3,3.87,174.7,18.81,64.13],
 ["W 360 x 58,0",58.0,358.0,172.0,13.1,7.9,332.0,72.5,16143.0,901.8,14.92,1014.8,1113.0,129.4,3.92,199.8,21.22,70.96],
 ["W 360 x 64,0",64.0,347.0,203.0,13.5,7.7,320.0,81.7,17890.0,1031.1,14.8,1145.5,1885.0,185.7,4.8,284.5,23.95,67.04],
 ["W 360 x 72,0",72.0,350.0,204.0,15.1,8.6,320.0,91.3,20169.0,1152.5,14.86,1285.9,2140.0,209.8,4.84,321.8,26.89,75.52],
 ["W 360 x 79,0",79.0,354.0,205.0,16.8,9.4,320.0,101.2,22713.0,1283.2,14.98,1437.0,2416.0,235.7,4.89,361.9,30.05,83.49],
 ["W 360 x 91,0 (H)",91.0,353.0,254.0,16.4,9.5,320.0,115.9,26755.0,1515.9,15.19,1680.1,4483.0,353.0,6.22,538.1,35.13,84.14],
 ["W 360 x 101,0 (H)",101.0,357.0,255.0,18.3,10.5,320.0,129.5,30279.0,1696.3,15.29,1888.9,5063.0,397.1,6.25,606.1,39.5,94.05],
 ["W 360 x 110,0 (H)",110.0,360.0,256.0,19.9,11.4,320.0,140.6,33155.0,1841.9,15.36,2059.3,5570.0,435.2,6.29,664.5,43.06,102.97],
 ["W 360 x 122,0 (H)",122.0,363.0,257.0,21.7,13.0,320.0,155.3,36599.0,2016.5,15.35,2269.8,6147.0,478.4,6.29,732.4,47.46,118.4],
 ["W 410 x 38,8",38.8,399.0,140.0,8.8,6.4,381.0,50.3,12777.0,640.5,15.94,736.8,404.0,57.7,2.83,90.9,15.41,64.07],
 ["W 410 x 46,1",46.1,403.0,140.0,11.2,7.0,381.0,59.2,15690.0,778.7,16.27,891.1,514.0,73.4,2.95,115.2,18.63,70.78],
 ["W 410 x 53,0",53.0,403.0,177.0,10.9,7.5,381.0,68.4,18734.0,929.7,16.55,1052.2,1009.0,114.0,3.84,176.9,22.0,75.84],
 ["W 410 x 60,0",60.0,407.0,178.0,12.8,7.7,381.0,76.2,21707.0,1066.7,16.88,1201.5,1205.0,135.4,3.98,209.2,25.12,78.63],
 ["W 410 x 67,0",67.0,410.0,179.0,14.4,8.8,381.0,86.3,24678.0,1203.8,16.91,1362.7,1379.0,154.1,4.0,239.0,28.49,90.53],
 ["W 410 x 75,0",75.0,413.0,180.0,16.0,9.7,381.0,95.8,27616.0,1337.3,16.98,1518.6,1559.0,173.2,4.03,269.1,31.75,100.52],
 ["W 410 x 85,0",85.0,417.0,181.0,18.2,10.9,381.0,108.6,31658.0,1518.4,17.07,1731.7,1804.0,199.3,4.08,310.4,36.21,114.05],
 ["W 460 x 52,0",52.0,450.0,152.0,10.8,7.6,428.0,66.6,21370.0,949.8,17.91,1095.9,634.0,83.5,3.09,131.7,22.91,85.81],
 ["W 460 x 60,0",60.0,455.0,153.0,13.3,8.0,428.0,76.2,25652.0,1127.6,18.35,1292.1,796.0,104.1,3.23,163.4,27.02,91.33],
 ["W 460 x 68,0",68.0,459.0,154.0,15.4,9.1,428.0,87.6,29851.0,1300.7,18.46,1495.4,941.0,122.2,3.28,192.4,31.27,104.8],
 ["W 460 x 74,0",74.0,457.0,190.0,14.5,9.0,428.0,94.9,33415.0,1462.4,18.77,1657.4,1661.0,174.8,4.18,271.3,34.65,103.2],
 ["W 460 x 82,0",82.0,460.0,191.0,16.0,9.9,428.0,104.7,37157.0,1615.5,18.84,1836.4,1862.0,195.0,4.22,303.3,38.4,114.26],
 ["W 460 x 89,0",89.0,463.0,192.0,17.7,10.5,428.0,114.1,41105.0,1775.6,18.98,2019.4,2093.0,218.0,4.28,339.0,42.22,121.98],
 ["W 460 X 97,0",97.0,466.0,193.0,19.0,11.4,428.0,123.4,44658.0,1916.7,19.03,2187.4,2283.0,236.6,4.3,368.8,45.74,133.29],
 ["W 460 X 106,0",106.0,469.0,194.0,20.6,12.6,428.0,135.1,48978.0,2088.6,19.04,2394.6,2515.0,259.3,4.32,405.7,50.07,148.27],
 ["W 530 x 66,0",66.0,525.0,165.0,11.4,8.9,502.0,83.6,34971.0,1332.2,20.46,1558.0,857.0,103.9,3.2,166.0,32.58,117.24],
 ["W 530 x 72,0",72.0,524.0,207.0,10.9,9.0,502.0,91.6,39969.0,1525.5,20.89,1755.9,1615.0,156.0,4.2,244.6,36.52,118.33],
 ["W 530 x 74,0",74.0,529.0,166.0,13.6,9.7,502.0,95.1,40969.0,1548.9,20.76,1804.9,1041.0,125.5,3.31,200.1,37.74,128.75],
 ["W 530 x 82,0",82.0,528.0,209.0,13.3,9.5,501.0,104.5,47569.0,1801.8,21.34,2058.5,2028.0,194.1,4.41,302.7,43.04,125.86],
 ["W 530 x 85,0",85.0,535.0,166.0,16.5,10.3,502.0,107.7,48453.0,1811.3,21.21,2099.8,1263.0,152.2,3.42,241.6,43.9,138.26],
 ["W 530 x 92,0",92.0,533.0,209.0,15.6,10.2,502.0,117.6,55157.0,2069.7,21.65,2359.8,2379.0,227.6,4.5,345.7,49.34,136.41],
 ["W 530 x 101,0",101.0,537.0,210.0,17.4,10.9,502.0,130.0,62198.0,2316.5,21.87,2640.3,2693.0,256.5,4.55,400.6,55.21,146.86],
 ["W 530 x 109,0",109.0,539.0,211.0,18.8,11.6,501.0,139.7,67226.0,2494.5,21.94,2847.0,2952.0,279.8,4.6,437.4,59.53,156.88],
 ["W 530 x 123,0",123.0,544.0,212.0,21.2,13.1,502.0,157.8,76577.0,2815.3,22.03,3228.1,3378.0,318.7,4.63,500.2,67.5,178.81],
 ["W 530 x 138,0",138.0,549.0,214.0,23.8,14.7,501.0,177.8,87079.0,3172.3,22.13,3653.3,3904.0,364.8,4.69,574.5,76.39,202.49],
 ["W 610 x 82,0",82.0,599.0,178.0,12.8,10.0,573.0,105.1,56628.0,1890.8,23.21,2219.9,1210.0,135.9,3.39,219.0,46.42,150.29],
 ["W 610 x 92,0",92.0,603.0,179.0,15.0,10.9,573.0,118.4,65277.0,2165.1,23.48,2535.8,1442.0,161.1,3.49,259.3,53.02,164.92],
 ["W 610 x 101,0",101.0,603.0,228.0,14.9,10.5,573.0,130.3,77003.0,2554.0,24.31,2922.7,2951.0,258.8,4.76,405.0,61.11,158.86],
 ["W 610 x 113,0",113.0,608.0,228.0,17.3,11.2,573.0,145.3,88196.0,2091.2,24.64,3312.9,3426.0,300.5,4.86,469.7,69.27,170.86],
 ["W 610 x 125,0",125.0,612.0,229.0,19.6,11.9,573.0,160.1,99184.0,3241.3,24.89,3697.3,3933.0,343.5,4.96,536.3,77.31,182.73],
 ["W 610 x 140,0",140.0,617.0,230.0,22.2,13.1,573.0,179.3,112619.0,3650.5,25.06,4173.1,4515.0,392.6,5.02,614.0,87.26,202.8],
 ["W 610 x 153,0",153.0,623.0,229.0,24.9,14.0,573.0,196.5,125783.0,4038.0,25.3,4622.7,4999.0,436.6,5.04,683.4,96.66,218.84],
 ["W 610 x 155,0",155.0,611.0,324.0,19.0,12.7,573.0,198.1,129583.0,4241.7,25.58,4749.1,10783.0,665.6,7.38,1022.6,99.3,194.7],
 ["W 610 x 174,0",174.0,616.0,325.0,21.6,14.0,573.0,222.8,147754.0,4797.2,25.75,5383.3,12374.0,761.5,7.45,1171.1,112.56,216.38],
 ["W 610 x 195,0",195.0,622.0,327.0,24.4,15.4,573.0,250.1,168484.0,5417.5,25.96,6095.4,14240.0,870.9,7.55,1341.0,127.45,240.34],
 ["W 610 x 217,0",217.0,628.0,328.0,27.7,16.5,573.0,278.4,191395.0,6095.4,26.22,6868.8,16316.0,994.9,7.66,1531.6,143.62,259.16],
];

const FY = 3.45, E = 2000.0, SIGMA_R = 0.30*FY, CAL = 1.65;
const TF_PER_KN = 1/9.80665, KN_PER_TF = 9.80665;

const LOAD_PATTERNS = {
  uniforme:     {label:"Uniformemente distribuída", short:"Distribuída ao longo de todo o vão.",              a:0.125, c:0.500, e:0.0130, cargaLabel:"Carga total distribuída"},
  ponto_meio:   {label:"1 carga no meio (L/2)",      short:"Uma carga concentrada no centro do vão.",         a:0.250, c:0.500, e:0.0208, cargaLabel:"Valor da carga concentrada"},
  dois_tercos:  {label:"2 cargas nos terços (L/3)",  short:"Duas cargas iguais, nos pontos a L/3 e 2L/3.",    a:0.333, c:1.000, e:0.0355, cargaLabel:"Valor de cada carga concentrada"},
  tres_quartos: {label:"3 cargas nos quartos (L/4)", short:"Três cargas iguais, a cada L/4 do vão.",          a:0.500, c:1.500, e:0.0500, cargaLabel:"Valor de cada carga concentrada"},
};

function buildPerfis(){
  return PERFIS_RAW.map(row=>{
    const o={};
    PERFIL_KEYS.forEach((k,i)=>o[k]=row[i]);
    return o;
  });
}
const PERFIS = buildPerfis();

function lpDetalhado(perfil){
  const Lp_cm = 1.76*perfil.ry*Math.sqrt(E/FY);
  return {ry:perfil.ry, raizE_fy: Math.sqrt(E/FY), Lp_cm, Lp_m: Lp_cm/100.0};
}

function mrdDetalhado(perfil){
  const {Zx,Wx,bf,tf} = perfil;
  const Mpl = FY*Zx/100.0;
  const lam = (bf/2.0)/tf;
  const lamP = 0.38*Math.sqrt(E/FY);
  const lamR = 0.83*Math.sqrt(E/(FY-SIGMA_R));
  const Mr = (FY-SIGMA_R)*Wx/100.0;
  let Mnflm, regime;
  if(lam<=lamP){ Mnflm=Mpl; regime="compacta"; }
  else if(lam<=lamR){ Mnflm = Mpl-(Mpl-Mr)*(lam-lamP)/(lamR-lamP); regime="semicompacta"; }
  else { Mnflm=Mr; regime="esbelta"; }
  const Mn = Math.min(Mpl,Mnflm);
  const governa = Mpl<=Mnflm ? "FLT (patamar plástico, Lb≤Lp)" : "FLM (flambagem local da mesa)";
  const Mrd = Mn/CAL;
  return {Zx,Wx,bf,tf,Mpl,lam,lamP,lamR,Mr,Mnflm,regime,Mn,governa,Mrd};
}
function vrdDetalhado(perfil){
  const dCm=perfil.d/10.0, twCm=perfil.tw/10.0;
  const Aw = dCm*twCm;
  const Vpl = 0.6*Aw*FY;
  const Vrd = Vpl/CAL;
  return {dCm,twCm,Aw,Vpl,Vrd};
}

function verificarPerfil(perfil, vaoM, tipo, cargaUtilTf, LbM, limiteFlechaFrac, cargaVariavelTf){
  const pat = LOAD_PATTERNS[tipo];
  const Lcm = vaoM*100.0;
  const ppTfm = perfil.massa/1000.0;
  const cargaVar = (cargaVariavelTf==null) ? cargaUtilTf : cargaVariavelTf;

  const mrdDet = mrdDetalhado(perfil);
  const vrdDet = vrdDetalhado(perfil);
  const Mrd = mrdDet.Mrd, Vrd = vrdDet.Vrd;
  const MrdCat = perfil.mrdCat;
  const VrdCat = perfil.qvrdCat/2.0;

  const Mpp = ppTfm*vaoM*vaoM/8.0;
  const Mutil = pat.a*cargaUtilTf*vaoM;
  const Msd = Mpp + Mutil;

  const Vpp = ppTfm*vaoM/2.0;
  const Vutil = pat.c*cargaUtilTf;
  const Vsd = Vpp + Vutil;

  const okMomento = Msd <= Mrd;
  const okCortante = Vsd <= Vrd;

  let flechaCm=null, flechaLimCm=null, okFlecha=true;
  if(limiteFlechaFrac){
    flechaCm = pat.e*cargaVar*Math.pow(Lcm,3)/(E*perfil.Ix);
    flechaLimCm = Lcm/limiteFlechaFrac;
    okFlecha = flechaCm <= flechaLimCm;
  }

  const LbMEff = (LbM==null) ? vaoM : LbM;
  const lpDet = lpDetalhado(perfil);
  const avisoFlt = LbMEff > lpDet.Lp_m;

  return {perfil, tipo, pat, vaoM, Lcm, ppTfm, cargaUtilTf, cargaVar, limiteFlechaFrac,
    mrdDet, vrdDet, lpDet, Mpp, Mutil, Msd, Vpp, Vutil, Vsd, Mrd, Vrd, MrdCat, VrdCat,
    flechaCm, flechaLimCm, Lp:lpDet.Lp_m, LbM:LbMEff,
    okMomento, okCortante, okFlecha, avisoFlt, ok: okMomento && okCortante && okFlecha};
}

function recomendar(vaoM, tipo, cargaUtilTf, LbM, limiteFlechaFrac, cargaVariavelTf){
  const resultados = PERFIS.map(p=>verificarPerfil(p, vaoM, tipo, cargaUtilTf, LbM, limiteFlechaFrac, cargaVariavelTf));
  const adequados = resultados.filter(r=>r.ok);
  adequados.sort((a,b)=>a.perfil.massa-b.perfil.massa);
  return adequados;
}

/* ---------------- Coluna: compressão axial (flambagem) — NBR 8800:2008, cap. 3 ---------------- */

// Qs (flambagem local da mesa sob compressão uniforme) e Qa (flambagem local da alma,
// efetivada por largura efetiva) — limites conforme Anexo F / Tabela F.1 da NBR 8800:2008.
function qsDetalhado(perfil){
  const lam = (perfil.bf/2.0)/perfil.tf;
  const lamR = 0.56*Math.sqrt(E/FY);
  let Qs;
  if(lam <= lamR) Qs = 1.0;
  else if(lam <= 1.03*Math.sqrt(E/FY)) Qs = 1.415 - 0.74*lam*Math.sqrt(FY/E);
  else Qs = 0.69*E/(FY*lam*lam);
  return {lam, lamR, Qs};
}
function qaDetalhado(perfil){
  const lam = perfil.h/perfil.tw; // h/tw, alma
  const lamR = 1.49*Math.sqrt(E/FY);
  if(lam <= lamR) return {lam, lamR, bef:perfil.h, Aef:perfil.A, Qa:1.0};
  // largura efetiva com f=fy (simplificação não-iterativa, a favor da segurança)
  let bef = 1.92*perfil.tw*Math.sqrt(E/FY)*(1 - (0.34/lam)*Math.sqrt(E/FY));
  bef = Math.min(bef, perfil.h);
  const Aef = perfil.A - (perfil.h - bef)*perfil.tw/100.0; // (h,tw em mm) / 100 -> cm²
  const Qa = Aef/perfil.A;
  return {lam, lamR, bef, Aef, Qa};
}

function ncRdDetalhado(perfil, KLxCm, KLyCm){
  const qs = qsDetalhado(perfil);
  const qa = qaDetalhado(perfil);
  const Q = qs.Qs*qa.Qa;

  const Iy_cm4 = perfil.ry*perfil.ry*perfil.A;
  const Ix_cm4 = perfil.rx*perfil.rx*perfil.A;
  const Nex = Math.PI*Math.PI*E*Ix_cm4/(KLxCm*KLxCm);
  const Ney = Math.PI*Math.PI*E*Iy_cm4/(KLyCm*KLyCm);
  const Ne = Math.min(Nex, Ney);
  const eixoGovernante = Ney <= Nex ? "y-y" : "x-x";

  const lambdaKLx = KLxCm/perfil.rx;
  const lambdaKLy = KLyCm/perfil.ry;
  const esbeltezMax = Math.max(lambdaKLx, lambdaKLy);

  const lambda0 = Math.sqrt(Q*perfil.A*FY/Ne);
  let chi;
  if(lambda0 <= 1.5) chi = Math.pow(0.658, lambda0*lambda0);
  else chi = 0.877/(lambda0*lambda0);

  const Nn = chi*Q*perfil.A*FY;
  const NcRd = Nn/CAL;

  return {qs, qa, Q, Ix_cm4, Iy_cm4, Nex, Ney, Ne, eixoGovernante,
    lambdaKLx, lambdaKLy, esbeltezMax, lambda0, chi, Nn, NcRd};
}

function verificarPerfilColuna(perfil, LxM, LyM, Kx, Ky, cargaAxialTf){
  const KLxCm = Kx*LxM*100.0;
  const KLyCm = Ky*LyM*100.0;
  const nc = ncRdDetalhado(perfil, KLxCm, KLyCm);

  const okAxial = cargaAxialTf <= nc.NcRd;
  const esbeltezOk = nc.esbeltezMax <= 200;

  return {perfil, LxM, LyM, Kx, Ky, KLxCm, KLyCm, cargaAxialTf, nc,
    okAxial, esbeltezOk, ok: okAxial && esbeltezOk};
}

function recomendarColuna(LxM, LyM, Kx, Ky, cargaAxialTf){
  const resultados = PERFIS.map(p=>verificarPerfilColuna(p, LxM, LyM, Kx, Ky, cargaAxialTf));
  const adequados = resultados.filter(r=>r.ok);
  adequados.sort((a,b)=>a.perfil.massa-b.perfil.massa);
  return adequados;
}

/* ---------------- UI wiring ---------------- */

const LOAD_SVGS = {
  uniforme: `<svg viewBox="0 0 120 40" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
    <line x1="10" y1="18" x2="110" y2="18"/>
    ${[14,28,42,56,70,84,98].map(x=>`<line x1="${x}" y1="4" x2="${x}" y2="16"/><path d="M${x-3} 13 L${x} 18 L${x+3} 13" />`).join("")}
    <path d="M10 18 L4 30 L16 30 Z"/><path d="M110 18 L104 30 L116 30 Z"/>
    <line x1="0" y1="31" x2="9" y2="31"/><line x1="111" y1="31" x2="120" y2="31"/>
  </svg>`,
  ponto_meio: `<svg viewBox="0 0 120 40" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
    <line x1="10" y1="18" x2="110" y2="18"/>
    <line x1="60" y1="2" x2="60" y2="16"/><path d="M56 12 L60 18 L64 12"/>
    <path d="M10 18 L4 30 L16 30 Z"/><path d="M110 18 L104 30 L116 30 Z"/>
    <line x1="0" y1="31" x2="9" y2="31"/><line x1="111" y1="31" x2="120" y2="31"/>
  </svg>`,
  dois_tercos: `<svg viewBox="0 0 120 40" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
    <line x1="10" y1="18" x2="110" y2="18"/>
    <line x1="43" y1="2" x2="43" y2="16"/><path d="M39 12 L43 18 L47 12"/>
    <line x1="77" y1="2" x2="77" y2="16"/><path d="M73 12 L77 18 L81 12"/>
    <path d="M10 18 L4 30 L16 30 Z"/><path d="M110 18 L104 30 L116 30 Z"/>
    <line x1="0" y1="31" x2="9" y2="31"/><line x1="111" y1="31" x2="120" y2="31"/>
  </svg>`,
  tres_quartos: `<svg viewBox="0 0 120 40" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
    <line x1="10" y1="18" x2="110" y2="18"/>
    <line x1="35" y1="2" x2="35" y2="16"/><path d="M31 12 L35 18 L39 12"/>
    <line x1="60" y1="2" x2="60" y2="16"/><path d="M56 12 L60 18 L64 12"/>
    <line x1="85" y1="2" x2="85" y2="16"/><path d="M81 12 L85 18 L89 12"/>
    <path d="M10 18 L4 30 L16 30 Z"/><path d="M110 18 L104 30 L116 30 Z"/>
    <line x1="0" y1="31" x2="9" y2="31"/><line x1="111" y1="31" x2="120" y2="31"/>
  </svg>`,
};

const loadGrid = document.getElementById("loadGrid");
Object.keys(LOAD_PATTERNS).forEach((key,i)=>{
  const pat = LOAD_PATTERNS[key];
  const lab = document.createElement("label");
  lab.className = "load-opt";
  lab.innerHTML = `<input type="radio" name="tipo" value="${key}" ${i===0?"checked":""}>${LOAD_SVGS[key]}<span>${pat.label}</span>`;
  loadGrid.appendChild(lab);
});

const els = {
  vao: document.getElementById("vao"), vaoRange: document.getElementById("vaoRange"),
  carga: document.getElementById("carga"), cargaLabel: document.getElementById("cargaLabel"), cargaHelp: document.getElementById("cargaHelp"),
  cargaVar: document.getElementById("cargaVar"),
  lb: document.getElementById("lb"), lbRange: document.getElementById("lbRange"),
  flecha: document.getElementById("flecha"),
  loadHelp: document.getElementById("loadHelp"),
  cards: document.getElementById("cards"),
  resMeta: document.getElementById("resMeta"),
  moreBtn: document.getElementById("moreBtn"),
  diagramWrap: document.getElementById("diagramWrap"),
  diagramCard: document.getElementById("diagramCard"),
  diagramTitle: document.getElementById("diagramTitle"),
  diagramMeta: document.getElementById("diagramMeta"),
  dlDiagramBtn: document.getElementById("dlDiagramBtn"),
  dlDiagramStatus: document.getElementById("dlDiagramStatus"),
  beamFields: document.getElementById("beamFields"),
  columnFields: document.getElementById("columnFields"),
  colLx: document.getElementById("colLx"), colKx: document.getElementById("colKx"),
  colLy: document.getElementById("colLy"), colKy: document.getElementById("colKy"),
  colCarga: document.getElementById("colCarga"),
  compactToggle: document.getElementById("compactToggle"),
  perfilSelect: document.getElementById("perfilSelect"),
  reportStatus: document.getElementById("reportStatus"),
  reportBar: document.getElementById("reportBar"),
};

els.compactToggle.addEventListener("change", ()=>{
  els.cards.classList.toggle("compact", els.compactToggle.checked);
});

document.getElementById("modeGrid").addEventListener("change", ()=>{
  const modo = document.querySelector('input[name="modo"]:checked').value;
  els.beamFields.hidden = modo !== "viga";
  els.columnFields.hidden = modo !== "coluna";
  if(modo === "viga"){
    els.diagramTitle.textContent = "Diagrama de carregamento";
    els.diagramMeta.textContent = "Reações, força cortante e momento fletor da carga aplicada (sem peso próprio)";
  } else {
    els.diagramTitle.textContent = "Diagrama da coluna";
    els.diagramMeta.textContent = "Carga axial, comprimentos destravados e forma de flambagem em cada eixo";
  }
  document.getElementById("resTitle").textContent = modo === "viga" ? "Perfis recomendados" : "Perfis recomendados (compressão axial)";
  recalc();
});

let cargaVarTouched = false, lbTouched = false, shown = 6, currentResults = [], currentMode = "viga";
// perfil escolhido para o relatorio: guardado pela bitola, para sobreviver a um recalculo
let selectedIdx = 0, selectedBitola = null;
els.cargaVar.addEventListener("input", ()=>{ cargaVarTouched = true; recalc(); });
els.lb.addEventListener("input", ()=>{ lbTouched = true; els.lbRange.value = els.lb.value; recalc(); });
els.lbRange.addEventListener("input", ()=>{ lbTouched = true; els.lb.value = els.lbRange.value; recalc(); });

function syncPair(numId, rangeId){
  const num = document.getElementById(numId), range = document.getElementById(rangeId);
  num.addEventListener("input", ()=>{ range.value = num.value; onCoreChange(); });
  range.addEventListener("input", ()=>{ num.value = range.value; onCoreChange(); });
}
syncPair("vao","vaoRange");

function onCoreChange(){
  if(!lbTouched){ els.lb.value = els.vao.value; els.lbRange.value = els.vao.value; els.lbRange.max = Math.max(14, +els.vao.value); }
  els.vaoRange.max = Math.max(14, +els.vao.value);
  recalc();
}

els.carga.addEventListener("input", ()=>{
  if(!cargaVarTouched){ els.cargaVar.value = els.carga.value; }
  recalc();
});
els.flecha.addEventListener("change", recalc);
loadGrid.addEventListener("change", ()=>{
  const tipo = document.querySelector('input[name="tipo"]:checked').value;
  const pat = LOAD_PATTERNS[tipo];
  els.cargaLabel.textContent = pat.cargaLabel + " (kN)";
  els.loadHelp.textContent = pat.short;
  recalc();
});

function fmt(v, d=2){ return v.toLocaleString("pt-BR", {minimumFractionDigits:d, maximumFractionDigits:d}); }

const MOMENT_SHAPES = {
  ponto_meio:   [[0,0],[0.5,1],[1,0]],
  dois_tercos:  [[0,0],[1/3,1],[2/3,1],[1,0]],
  tres_quartos: [[0,0],[0.25,0.75],[0.5,1],[0.75,0.75],[1,0]],
};
const LOAD_POSITIONS = {
  ponto_meio: [0.5],
  dois_tercos: [1/3, 2/3],
  tres_quartos: [0.25, 0.5, 0.75],
};
// segmentos [t0, t1, nível] do diagrama de cortante, nível normalizado pela reação R (V/R)
const SHEAR_SEGMENTS = {
  ponto_meio:   [[0,0.5,1],[0.5,1,-1]],
  dois_tercos:  [[0,1/3,1],[1/3,2/3,0],[2/3,1,-1]],
  tres_quartos: [[0,0.25,1],[0.25,0.5,1/3],[0.5,0.75,-1/3],[0.75,1,-1]],
};

function dimV(x, y1, y2, label){
  // linha de cota vertical, com setas nas pontas e rótulo girado ao lado
  const midY = (y1+y2)/2;
  let s = `<line class="ps-dim" x1="${x}" y1="${y1}" x2="${x}" y2="${y2}"/>`;
  s += `<path class="ps-dim" d="M${x-3},${y1+6} L${x},${y1} L${x+3},${y1+6}" fill="none"/>`;
  s += `<path class="ps-dim" d="M${x-3},${y2-6} L${x},${y2} L${x+3},${y2-6}" fill="none"/>`;
  s += `<text class="ps-dim-label" x="${x-6}" y="${midY}" text-anchor="end" transform="rotate(-90 ${x-6} ${midY})">${label}</text>`;
  return s;
}
function dimH(y, x1, x2, label){
  const midX = (x1+x2)/2;
  let s = `<line class="ps-dim" x1="${x1}" y1="${y}" x2="${x2}" y2="${y}"/>`;
  s += `<path class="ps-dim" d="M${x1+6},${y-3} L${x1},${y} L${x1+6},${y+3}" fill="none"/>`;
  s += `<path class="ps-dim" d="M${x2-6},${y-3} L${x2},${y} L${x2-6},${y+3}" fill="none"/>`;
  s += `<text class="ps-dim-label" x="${midX}" y="${y-5}" text-anchor="middle">${label}</text>`;
  return s;
}

function buildProfileSvg(perfil){
  const d = perfil.d, bf = perfil.bf, tf = perfil.tf, tw = perfil.tw, h = perfil.h;
  const mL = 64, mR = 64, mT = 28, mB = 52;   // folga para as cotas e os rótulos X/Y não serem cortados
  const x0 = mL, y0 = mT;
  const xC = x0 + bf/2, yC = y0 + d/2;
  const webX0 = xC - tw/2, webX1 = xC + tw/2;
  const flTopY1 = y0 + tf, flBotY0 = y0 + d - tf;
  const W = bf + mL + mR, H = d + mT + mB;

  let s = "";
  s += `<path class="ps-steel" d="M${x0},${y0} H${x0+bf} V${flTopY1} H${webX1} V${flBotY0} H${x0+bf} V${y0+d} H${x0} V${flBotY0} H${webX0} V${flTopY1} H${x0} Z"/>`;

  s += `<line class="ps-axis" x1="${x0-16}" y1="${yC}" x2="${x0+bf+16}" y2="${yC}" stroke-dasharray="5,3"/>`;
  s += `<text class="ps-axis-label" x="${x0-20}" y="${yC+4}" text-anchor="end">X</text>`;
  s += `<text class="ps-axis-label" x="${x0+bf+20}" y="${yC+4}" text-anchor="start">X</text>`;
  s += `<line class="ps-axis" x1="${xC}" y1="${y0-12}" x2="${xC}" y2="${y0+d+12}" stroke-dasharray="5,3"/>`;
  s += `<text class="ps-axis-label" x="${xC}" y="${y0-16}" text-anchor="middle">Y</text>`;
  s += `<text class="ps-axis-label" x="${xC}" y="${y0+d+36}" text-anchor="middle">Y</text>`;

  s += dimV(x0+bf+42, y0, y0+d, `d = ${fmt(d,0)} mm`);
  s += dimV(x0-34, flTopY1, flBotY0, `h = ${fmt(h,0)}`);
  s += dimH(y0+d+18, x0, x0+bf, `bf = ${fmt(bf,0)} mm`);

  s += `<text class="ps-dim-label" x="${x0-8}" y="${y0+tf/2+3}" text-anchor="end">tf=${fmt(tf,1)}</text>`;
  s += `<line class="ps-dim" x1="${x0-6}" y1="${y0}" x2="${x0-6}" y2="${flTopY1}"/>`;
  s += `<text class="ps-dim-label" x="${x0-8}" y="${flBotY0+tf/2+3}" text-anchor="end">tf=${fmt(tf,1)}</text>`;
  s += `<line class="ps-dim" x1="${x0-6}" y1="${flBotY0}" x2="${x0-6}" y2="${y0+d}"/>`;
  s += `<text class="ps-dim-label" x="${xC+8}" y="${yC-6}" text-anchor="start">tw=${fmt(tw,1)}</text>`;

  return `<svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">${s}</svg>`;
}

// condição de apoio de cada extremidade a partir do coeficiente K escolhido (mesmas opções do <select>)
// bottom/top: "fixed" (engastada, sem rotação nem translação), "pinned" (rotulada, sem translação),
// "guided" (rotação impedida, translação livre) ou "free" (sem nenhuma restrição — extremidade livre)
// shape(t): forma flambada aproximada (deslocamento lateral normalizado, t de 0=base a 1=topo)
const K_CONDITIONS = {
  "0.65": {bottom:"fixed",  top:"fixed",  label:"engastada-engastada", shape:t=>(1-Math.cos(2*Math.PI*t))/2},
  "0.8":  {bottom:"fixed",  top:"pinned", label:"engastada-rotulada",  shape:t=>Math.sin(Math.PI*t)*(0.7+0.6*t)},
  "1":    {bottom:"pinned", top:"pinned", label:"rotulada-rotulada",   shape:t=>Math.sin(Math.PI*t)},
  "1.2":  {bottom:"fixed",  top:"guided", label:"engastada-livre c/ translação", shape:t=>(1-Math.cos(Math.PI*t))/2},
  "2":    {bottom:"fixed",  top:"free",   label:"engastada-livre (balanço)",     shape:t=>1-Math.cos(Math.PI*t/2)},
};

function supportSymbol(x, y, type, dir){
  // dir=+1 (símbolo abaixo do ponto y, apoio de base) ou -1 (símbolo acima, apoio de topo)
  let s = "";
  if(type === "pinned"){
    const y2 = y + dir*17;
    s += `<path class="dg-support" d="M${x-9},${y2} L${x+9},${y2} L${x},${y} Z" stroke-width="1.3"/>`;
    s += `<line class="dg-hatch" x1="${x-13}" y1="${y2}" x2="${x+13}" y2="${y2}" stroke-width="1.3"/>`;
    for(let k=-2;k<=2;k++){
      s += `<line class="dg-hatch" x1="${x+k*5-4}" y1="${y2+dir*6}" x2="${x+k*5+1}" y2="${y2}" stroke-width="0.9"/>`;
    }
  } else if(type === "fixed"){
    const yWall = y + dir*3;
    s += `<line class="dg-beam" x1="${x-15}" y1="${yWall}" x2="${x+15}" y2="${yWall}" stroke-width="2.2"/>`;
    for(let k=-3;k<=3;k++){
      s += `<line class="dg-hatch" x1="${x+k*5}" y1="${yWall}" x2="${x+k*5-5}" y2="${yWall+dir*9}" stroke-width="1"/>`;
    }
  } else if(type === "guided"){
    const y2 = y + dir*9;
    s += `<line class="dg-beam" x1="${x-13}" y1="${y2}" x2="${x+13}" y2="${y2}" stroke-width="1.5"/>`;
    s += `<circle cx="${x-7}" cy="${y2+dir*5}" r="2.6" class="dg-support" stroke-width="1"/>`;
    s += `<circle cx="${x+7}" cy="${y2+dir*5}" r="2.6" class="dg-support" stroke-width="1"/>`;
  }
  // "free": nenhum símbolo (extremidade sem restrição)
  return s;
}

function drawOneColumn(xC, yTop, yBot, cond, cargaKN, tituloEixo, infoLinha){
  const Lpx = yBot - yTop;
  const amp = 24;
  let s = "";

  s += supportSymbol(xC, yBot, cond.bottom, 1);
  s += supportSymbol(xC, yTop, cond.top, -1);

  s += `<line class="dg-beam" x1="${xC}" y1="${yTop}" x2="${xC}" y2="${yBot}" stroke-width="3"/>`;

  s += `<line class="dg-load" x1="${xC}" y1="${yTop-36}" x2="${xC}" y2="${yTop}" stroke-width="2.3"/>`;
  s += `<path class="dg-load" d="M${xC-5},${yTop-9} L${xC},${yTop} L${xC+5},${yTop-9}" fill="none"/>`;
  s += `<text class="dg-label accent" x="${xC}" y="${yTop-42}" text-anchor="middle" font-size="12" font-weight="600">N = ${fmt(cargaKN,2)} kN</text>`;

  const steps = 28;
  let pathBow = `M${xC},${yTop}`;
  for(let i=1;i<=steps;i++){
    const t = i/steps;
    const y = yTop + t*Lpx;
    const x = xC + amp*cond.shape(t);
    pathBow += ` L${x.toFixed(1)},${y.toFixed(1)}`;
  }
  s += `<path class="dg-moment-line" d="${pathBow}" stroke-width="1.6" stroke-dasharray="5,4"/>`;

  s += `<text class="dg-label ink" x="${xC}" y="${yBot+46}" text-anchor="middle" font-size="12.5" font-weight="600">${tituloEixo}</text>`;
  s += `<text class="dg-label muted" x="${xC}" y="${yBot+62}" text-anchor="middle" font-size="11">${cond.label}</text>`;
  s += `<text class="dg-label accent" x="${xC}" y="${yBot+78}" text-anchor="middle" font-size="11.5" font-weight="600">${infoLinha}</text>`;

  return s;
}

function buildColumnDiagram(LxM, LyM, Kx, Ky, cargaKN){
  const condX = K_CONDITIONS[String(Kx)] || K_CONDITIONS["1"];
  const condY = K_CONDITIONS[String(Ky)] || K_CONDITIONS["1"];
  const yTop = 66, yBot = 250;
  const x1 = 160, x2 = 440;

  let s = "";
  s += drawOneColumn(x1, yTop, yBot, condX, cargaKN, "Eixo x-x", `Lx=${fmt(LxM,2)}m · Kx=${fmt(Kx,2)} → KLx=${fmt(Kx*LxM,2)}m`);
  s += drawOneColumn(x2, yTop, yBot, condY, cargaKN, "Eixo y-y", `Ly=${fmt(LyM,2)}m · Ky=${fmt(Ky,2)} → KLy=${fmt(Ky*LyM,2)}m`);
  s += `<line class="ps-axis" x1="${(x1+x2)/2}" y1="${yTop-10}" x2="${(x1+x2)/2}" y2="${yBot+15}" stroke-dasharray="3,4"/>`;

  const viewH = yBot + 92;
  return `<svg viewBox="0 0 600 ${viewH}" xmlns="http://www.w3.org/2000/svg">${s}</svg>`;
}

function buildDiagram(tipo, vaoM, cargaKN){
  const pat = LOAD_PATTERNS[tipo];
  const X0 = 50, X1 = 590, Ybeam = 70;
  const xAt = t => X0 + t*(X1-X0);
  const R_kN = pat.c * cargaKN;
  const Mmax_kNm = pat.a * cargaKN * vaoM;

  let s = "";

  // beam + supports
  s += `<line class="dg-beam" x1="${X0}" y1="${Ybeam}" x2="${X1}" y2="${Ybeam}" stroke-width="3"/>`;
  [X0, X1].forEach(x=>{
    s += `<path class="dg-support" d="M${x-11},${Ybeam+18} L${x+11},${Ybeam+18} L${x},${Ybeam} Z" stroke-width="1.5"/>`;
    s += `<line class="dg-hatch" x1="${x-15}" y1="${Ybeam+18}" x2="${x+15}" y2="${Ybeam+18}" stroke-width="1.5"/>`;
    for(let k=-3;k<=3;k++){
      s += `<line class="dg-hatch" x1="${x+k*5-5}" y1="${Ybeam+24}" x2="${x+k*5+1}" y2="${Ybeam+18}" stroke-width="1"/>`;
    }
  });

  // applied load
  const loadTop = 14, loadBottom = Ybeam-2;
  if(tipo === "uniforme"){
    s += `<line class="dg-load" x1="${X0}" y1="${loadTop}" x2="${X1}" y2="${loadTop}" stroke-width="1.5"/>`;
    for(let i=0;i<=10;i++){
      const x = xAt(i/10);
      s += `<line class="dg-load" x1="${x}" y1="${loadTop}" x2="${x}" y2="${loadBottom}" stroke-width="1.5"/>`;
      s += `<path class="dg-load" d="M${x-3.5},${loadBottom-6} L${x},${loadBottom} L${x+3.5},${loadBottom-6} Z"/>`;
    }
    const q = cargaKN/vaoM;
    s += `<text class="dg-label accent" x="${(X0+X1)/2}" y="${loadTop-5}" text-anchor="middle" font-size="13">q = ${fmt(q,2)} kN/m (P = ${fmt(cargaKN,2)} kN)</text>`;
  } else {
    LOAD_POSITIONS[tipo].forEach(t=>{
      const x = xAt(t);
      s += `<line class="dg-load" x1="${x}" y1="${loadTop}" x2="${x}" y2="${loadBottom}" stroke-width="2.5"/>`;
      s += `<path class="dg-load" d="M${x-4.5},${loadBottom-8} L${x},${loadBottom} L${x+4.5},${loadBottom-8} Z"/>`;
      s += `<text class="dg-label accent" x="${x}" y="${loadTop-5}" text-anchor="middle" font-size="12">${fmt(cargaKN,1)} kN</text>`;
    });
  }

  // reactions
  const reacBottom = Ybeam+48, reacTop = Ybeam+22;
  [X0, X1].forEach(x=>{
    s += `<line class="dg-reaction" x1="${x}" y1="${reacBottom}" x2="${x}" y2="${reacTop}" stroke-width="2.5"/>`;
    s += `<path class="dg-reaction" d="M${x-4.5},${reacTop+8} L${x},${reacTop} L${x+4.5},${reacTop+8} Z"/>`;
    s += `<text class="dg-label good" x="${x}" y="${reacBottom+16}" text-anchor="middle" font-size="12.5">R = ${fmt(R_kN,2)} kN</text>`;
  });

  // span dimension
  const dimY = 148;
  s += `<line class="dg-dim" x1="${X0}" y1="${dimY}" x2="${X1}" y2="${dimY}" stroke-width="1"/>`;
  s += `<line class="dg-dim" x1="${X0}" y1="${dimY-5}" x2="${X0}" y2="${dimY+5}" stroke-width="1"/>`;
  s += `<line class="dg-dim" x1="${X1}" y1="${dimY-5}" x2="${X1}" y2="${dimY+5}" stroke-width="1"/>`;
  s += `<text class="dg-label muted" x="${(X0+X1)/2}" y="${dimY+18}" text-anchor="middle" font-size="12">L = ${fmt(vaoM,2)} m</text>`;

  const mid = (X0+X1)/2;

  // shear force diagram
  const axisV = 226, depthV = 36;
  s += `<text class="dg-label muted" x="${X0}" y="${axisV-depthV-10}" font-size="11.5">Força cortante (V)</text>`;
  s += `<line class="dg-dim" x1="${X0}" y1="${axisV}" x2="${X1}" y2="${axisV}" stroke-width="1" stroke-dasharray="3,3"/>`;
  let pathV;
  if(tipo === "uniforme"){
    pathV = `M${X0},${axisV-depthV} L${X1},${axisV+depthV} L${X1},${axisV} L${X0},${axisV} Z`;
    s += `<path class="dg-shear-fill" d="${pathV}"/>`;
    s += `<path class="dg-shear-line" d="M${X0},${axisV-depthV} L${X1},${axisV+depthV}" stroke-width="2"/>`;
  } else {
    const segs = SHEAR_SEGMENTS[tipo];
    let d = `M${xAt(segs[0][0])},${axisV-segs[0][2]*depthV}`;
    let line = d;
    segs.forEach(([t0,t1,level],i)=>{
      const y = axisV - level*depthV;
      d += ` L${xAt(t1)},${y}`;
      line += ` L${xAt(t1)},${y}`;
      if(i<segs.length-1){
        const yNext = axisV - segs[i+1][2]*depthV;
        d += ` L${xAt(t1)},${yNext}`;
        line += ` L${xAt(t1)},${yNext}`;
      }
    });
    d += ` L${X1},${axisV} L${X0},${axisV} Z`;
    pathV = d;
    s += `<path class="dg-shear-fill" d="${pathV}"/>`;
    s += `<path class="dg-shear-line" d="${line}" stroke-width="2"/>`;
  }
  s += `<text class="dg-label oxide" x="${X1}" y="${axisV-depthV-10}" text-anchor="end" font-size="12.5" font-weight="600">V variando entre +${fmt(R_kN,2)} e −${fmt(R_kN,2)} kN</text>`;

  // bending moment diagram
  const axisY = axisV + depthV + 48, depth = 62;
  s += `<text class="dg-label muted" x="${X0}" y="${axisY-8}" font-size="11.5">Momento fletor (M)</text>`;
  s += `<line class="dg-dim" x1="${X0}" y1="${axisY}" x2="${X1}" y2="${axisY}" stroke-width="1" stroke-dasharray="3,3"/>`;
  let path;
  if(tipo === "uniforme"){
    path = `M${X0},${axisY} Q${mid},${axisY+2*depth} ${X1},${axisY} Z`;
  } else {
    const pts = MOMENT_SHAPES[tipo].map(([t,f])=>`${xAt(t)},${axisY+f*depth}`);
    path = `M${X0},${axisY} L${pts.join(" L")} L${X1},${axisY} Z`;
  }
  s += `<path class="dg-moment-fill" d="${path}"/>`;
  s += `<path class="dg-moment-line" d="${path}" stroke-width="2"/>`;
  s += `<text class="dg-label accent" x="${mid}" y="${axisY+depth+20}" text-anchor="middle" font-size="13" font-weight="600">M_max = ${fmt(Mmax_kNm,2)} kN·m</text>`;

  const viewH = axisY + depth + 40;
  return `<svg viewBox="0 0 640 ${viewH}" xmlns="http://www.w3.org/2000/svg">${s}</svg>`;
}

/* ================= MODELO DE CÁLCULO (fonte única de HTML, PDF e Word) =================

   Todo o passo a passo é descrito uma única vez, em texto, por modeloViga()/modeloColuna().
   Três consumidores leem a mesma estrutura:
     · renderModeloHtml()  -> memorial na tela e no relatório PDF (impressão do navegador)
     · buildWordParas()    -> memorial no arquivo .docx editável
     · buildPrintReportFor() -> reaproveita o HTML acima

   Notação: no texto escreve-se "M_sd", "L_p", "N_c,Rd". mathHtml() vira <sub>, mathTxt()
   apenas remove o sublinhado (o Word recebe "Msd", "Lp", "Nc,Rd").
   Expoentes e símbolos usam Unicode direto (², ³, √, ≤, ×, ·, λ, χ, δ, σ, π).
*/

const RE_SUB = /([A-Za-zΔλχδπσ])_([A-Za-z0-9,]+)/g;
function mathHtml(s){ return String(s).replace(RE_SUB, "$1<sub>$2</sub>"); }
function mathTxt(s){ return String(s).replace(RE_SUB, "$1$2"); }

function okBadge(okBool){
  return `<span class="cmp ${okBool?'ok':'fail'}">${okBool?'✓ atende':'✗ não atende'}</span>`;
}

/* ---------------- modelo: viga (flexão) ---------------- */

function modeloViga(r){
  const p = r.perfil, md = r.mrdDet, vd = r.vrdDet, pat = r.pat;
  const cargaKN = r.cargaUtilTf*KN_PER_TF, cargaVarKN = r.cargaVar*KN_PER_TF;
  const cargaEhTotal = r.tipo === "uniforme";

  const entradas = [
    ["L", "Vão livre entre apoios", `${fmt(r.vaoM,2)} m`, "informado pelo usuário"],
    ["—", "Tipo de carregamento", pat.label, "selecionado pelo usuário"],
    ["P", cargaEhTotal ? "Carga total distribuída aplicada (sem peso próprio da viga)"
                       : "Valor de cada carga concentrada (sem peso próprio da viga)",
       `${fmt(cargaKN,2)} kN`, "informado pelo usuário"],
    ["P_var", "Parcela variável da carga — só ela entra na flecha", `${fmt(cargaVarKN,2)} kN`,
       "informado pelo usuário (NBR 8800:2008, Anexo C)"],
    ["L_b", "Comprimento destravado da mesa comprimida", `${fmt(r.LbM,2)} m`, "informado pelo usuário"],
    ["δ_lim", "Limite de deslocamento vertical",
       r.limiteFlechaFrac ? `L/${r.limiteFlechaFrac}` : "não verificado",
       "escolhido pelo usuário na Tabela C.1 da NBR 8800:2008"],
    ["—", "Perfil verificado", p.bitola, "escolhido entre os 108 perfis W/HP da base"],
  ];

  const constantes = [
    ["f_y", "Resistência ao escoamento do aço", "3,45 tf/cm² = 34,5 kN/cm² = 345 MPa", "ASTM A572 Gr.50 — aço adotado no catálogo GERDAU"],
    ["E", "Módulo de elasticidade do aço", "2000 tf/cm² = 20000 kN/cm² ≈ 200 GPa", "NBR 8800:2008, item 4.5.2"],
    ["σ_r", "Tensão residual de laminação = 0,30·f_y", `${fmt(SIGMA_R,3)} tf/cm²`, "NBR 8800:2008 (perfis laminados)"],
    ["CAL", "Coeficiente de segurança global (tensões admissíveis)", "1,65", "critério da Tabela de Vãos e Cargas GERDAU, 5ª ed."],
    ["g", "Aceleração da gravidade — conversão kN ↔ tf", "9,80665 m/s²  →  1 tf = 9,80665 kN", "SI"],
  ];

  const props = [
    ["d", "Altura total do perfil", `${fmt(p.d,1)} mm`],
    ["b_f", "Largura da mesa", `${fmt(p.bf,1)} mm`],
    ["t_f", "Espessura da mesa", `${fmt(p.tf,2)} mm`],
    ["t_w", "Espessura da alma", `${fmt(p.tw,2)} mm`],
    ["h", "Altura da alma (entre mesas)", `${fmt(p.h,1)} mm`],
    ["A", "Área da seção transversal", `${fmt(p.A,2)} cm²`],
    ["I_x", "Momento de inércia — eixo x-x", `${fmt(p.Ix,0)} cm⁴`],
    ["W_x", "Módulo de resistência elástico — x-x", `${fmt(p.Wx,1)} cm³`],
    ["Z_x", "Módulo de resistência plástico — x-x", `${fmt(p.Zx,1)} cm³`],
    ["r_x", "Raio de giração — x-x", `${fmt(p.rx,2)} cm`],
    ["I_y", "Momento de inércia — eixo y-y", `${fmt(p.Iy,0)} cm⁴`],
    ["W_y", "Módulo de resistência elástico — y-y", `${fmt(p.Wy,1)} cm³`],
    ["Z_y", "Módulo de resistência plástico — y-y", `${fmt(p.Zy,1)} cm³`],
    ["r_y", "Raio de giração — y-y (governa a FLT)", `${fmt(p.ry,2)} cm`],
    ["massa", "Massa linear do perfil", `${fmt(p.massa,1)} kg/m`],
    ["M_rd (tab.)", "Momento resistente impresso na tabela GERDAU", `${fmt(p.mrdCat,2)} tf·m`],
    ["Q_vrd (tab.)", "Cortante resistente total impresso (2 apoios)", `${fmt(p.qvrdCat,2)} tf`],
  ];

  const secoes = [];

  secoes.push({titulo:"Conversão das entradas para as unidades de cálculo", passos:[
    {id:"P", t:"Carga aplicada, de kN para tf",
     f:"P(tf) = P(kN) / 9,80665",
     s:`P = ${fmt(cargaKN,2)} / 9,80665`,
     r:`P = ${fmt(r.cargaUtilTf,4)} tf`,
     n:"As fórmulas do catálogo GERDAU trabalham em tf e cm. Toda entrada dada em kN é convertida antes de qualquer conta; no fim, os resultados são reapresentados também em kN."},
    {id:"Pvar", t:"Parcela variável da carga, de kN para tf",
     f:"P_var(tf) = P_var(kN) / 9,80665",
     s:`P_var = ${fmt(cargaVarKN,2)} / 9,80665`,
     r:`P_var = ${fmt(r.cargaVar,4)} tf`,
     n:"A NBR 8800:2008 limita o deslocamento apenas sob a ação variável — a parcela permanente é compensada por contraflecha."},
    {id:"Lcm", t:"Vão, de m para cm",
     f:"L(cm) = L(m) × 100",
     s:`L = ${fmt(r.vaoM,2)} × 100`,
     r:`L = ${fmt(r.Lcm,1)} cm`,
     n:"O vão em cm é usado só na flecha, onde E e I_x estão em tf/cm² e cm⁴. Nas demais fórmulas o vão entra em metros, gerando resultados em tf·m."},
    {id:"pp", t:"Peso próprio distribuído do perfil",
     f:"p_p = massa / 1000",
     s:`p_p = ${fmt(p.massa,1)} / 1000`,
     r:`p_p = ${fmt(r.ppTfm,4)} tf/m = ${fmt(r.ppTfm*KN_PER_TF,3)} kN/m`,
     n:"A massa está em kg/m e 1 tf corresponde a 1000 kg. O peso próprio não é digitado pelo usuário: cada perfil candidato soma automaticamente o seu."},
  ]});

  const coefExpl = {
    uniforme:"Viga biapoiada com carga uniformemente distribuída: M = P·L/8 (a = 1/8 = 0,125), reação = P/2 (c = 0,5) e δ = 5·P·L³/(384·E·I) (e = 5/384 ≈ 0,0130). P é a carga total sobre o vão.",
    ponto_meio:"Carga única no meio do vão: M = P·L/4 (a = 0,25), reação = P/2 (c = 0,5) e δ = P·L³/(48·E·I) (e = 1/48 ≈ 0,0208).",
    dois_tercos:"Duas cargas iguais a L/3 e 2L/3: M = P·L/3 (a ≈ 0,333), reação = P (c = 1,0) e δ = 23·P·L³/(648·E·I) (e ≈ 0,0355). P é o valor de cada carga.",
    tres_quartos:"Três cargas iguais a L/4, L/2 e 3L/4: M = P·L/2 (a = 0,5), reação = 1,5·P (c = 1,5) e δ ≈ 19·P·L³/(384·E·I) (e ≈ 0,0500). P é o valor de cada carga.",
  };
  secoes.push({titulo:"Coeficientes do tipo de carregamento (a, c, e)", passos:[
    {id:"coef", t:`Coeficientes da configuração escolhida — ${pat.label.toLowerCase()}`,
     f:"M_ext = a·P·L      V_ext = c·P      δ = e·P_var·L³/(E·I_x)",
     s:`configuração: ${pat.label}`,
     r:`a = ${fmt(pat.a,3)}     c = ${fmt(pat.c,3)}     e = ${fmt(pat.e,4)}`,
     n:coefExpl[r.tipo] || ""},
  ]});

  secoes.push({titulo:"Esforços solicitantes (M_sd e V_sd)", passos:[
    {id:"Mpp", t:"Momento do peso próprio (carga sempre distribuída)",
     f:"M_pp = p_p · L² / 8",
     s:`M_pp = ${fmt(r.ppTfm,4)} × ${fmt(r.vaoM,2)}² / 8`,
     r:`M_pp = ${fmt(r.Mpp,4)} tf·m`,
     n:"O peso próprio do perfil é sempre uniformemente distribuído, qualquer que seja o tipo da carga aplicada — por isso usa o coeficiente 1/8, e não o coeficiente a."},
    {id:"Mext", t:"Momento da carga aplicada",
     f:"M_ext = a · P · L",
     s:`M_ext = ${fmt(pat.a,3)} × ${fmt(r.cargaUtilTf,4)} × ${fmt(r.vaoM,2)}`,
     r:`M_ext = ${fmt(r.Mutil,4)} tf·m`},
    {id:"Msd", t:"Momento fletor solicitante total",
     f:"M_sd = M_pp + M_ext",
     s:`M_sd = ${fmt(r.Mpp,4)} + ${fmt(r.Mutil,4)}`,
     r:`M_sd = ${fmt(r.Msd,3)} tf·m = ${fmt(r.Msd*KN_PER_TF,2)} kN·m`,
     n:"Valor de serviço (sem majoração por coeficientes de ponderação das ações): o critério do catálogo já embute a segurança no divisor 1,65 da resistência."},
    {id:"Vpp", t:"Cortante do peso próprio",
     f:"V_pp = p_p · L / 2",
     s:`V_pp = ${fmt(r.ppTfm,4)} × ${fmt(r.vaoM,2)} / 2`,
     r:`V_pp = ${fmt(r.Vpp,4)} tf`},
    {id:"Vext", t:"Cortante da carga aplicada (reação por apoio)",
     f:"V_ext = c · P",
     s:`V_ext = ${fmt(pat.c,3)} × ${fmt(r.cargaUtilTf,4)}`,
     r:`V_ext = ${fmt(r.Vutil,4)} tf`},
    {id:"Vsd", t:"Força cortante solicitante por apoio",
     f:"V_sd = V_pp + V_ext",
     s:`V_sd = ${fmt(r.Vpp,4)} + ${fmt(r.Vutil,4)}`,
     r:`V_sd = ${fmt(r.Vsd,3)} tf = ${fmt(r.Vsd*KN_PER_TF,2)} kN`,
     n:"Em viga biapoiada o cortante máximo ocorre junto aos apoios e vale a própria reação."},
  ]});

  const passosFlexao = [
    {id:"Lp", t:"Comprimento destravado limite do patamar plástico",
     f:"L_p = 1,76 · r_y · √(E / f_y)",
     s:`L_p = 1,76 × ${fmt(p.ry,2)} × √(${fmt(E,0)} / ${fmt(FY,2)})`,
     r:`L_p = ${fmt(r.lpDet.Lp_cm,1)} cm = ${fmt(r.Lp,2)} m   ·   L_b informado = ${fmt(r.LbM,2)} m`,
     ok: !r.avisoFlt,
     n: r.avisoFlt
        ? `Como L_b (${fmt(r.LbM,2)} m) é maior que L_p (${fmt(r.Lp,2)} m), a flambagem lateral com torção (FLT) pode reduzir M_rd abaixo do valor calculado adiante. Reduza o espaçamento entre travamentos ou peça verificação detalhada da FLT.`
        : `Com L_b ≤ L_p a seção atinge o momento de plastificação sem flambar lateralmente: a FLT não governa e M_n pode ser tomado como M_pl (limitado pela FLM).`},
    {id:"Mpl", t:"Momento de plastificação total da seção",
     f:"M_pl = f_y · Z_x",
     s:`M_pl = ${fmt(FY,2)} tf/cm² × ${fmt(p.Zx,1)} cm³ = ${fmt(md.Mpl*100,1)} tf·cm`,
     r:`M_pl = ${fmt(md.Mpl,3)} tf·m = ${fmt(md.Mpl*KN_PER_TF,2)} kN·m`,
     n:"Z_x é o módulo plástico: corresponde a toda a seção escoada, metade tracionada e metade comprimida. A divisão por 100 converte tf·cm em tf·m."},
    {id:"lam", t:"Esbeltez da mesa comprimida (FLM)",
     f:"λ = (b_f/2)/t_f      λ_p = 0,38·√(E/f_y)      λ_r = 0,83·√(E/(f_y − σ_r))",
     s:`λ = (${fmt(p.bf,1)}/2)/${fmt(p.tf,2)}   ·   λ_p = 0,38·√(${fmt(E,0)}/${fmt(FY,2)})   ·   λ_r = 0,83·√(${fmt(E,0)}/${fmt(FY-SIGMA_R,3)})`,
     r:`λ = ${fmt(md.lam,2)}     λ_p = ${fmt(md.lamP,2)}     λ_r = ${fmt(md.lamR,2)}   →  mesa ${md.regime}`,
     n: md.regime === "compacta"
        ? "Com λ ≤ λ_p a mesa é compacta: plastifica antes de flambar localmente, e a FLM não reduz o momento resistente."
        : "Com λ entre λ_p e λ_r a mesa é semicompacta: o momento resistente cai linearmente entre M_pl e M_r (interpolação do passo seguinte)."},
  ];
  if(md.regime !== "compacta"){
    passosFlexao.push(
      {id:"Mr", t:"Momento de início do escoamento, já descontada a tensão residual",
       f:"M_r = (f_y − σ_r) · W_x",
       s:`M_r = (${fmt(FY,2)} − ${fmt(SIGMA_R,3)}) × ${fmt(p.Wx,1)}`,
       r:`M_r = ${fmt(md.Mr,3)} tf·m`,
       n:"W_x é o módulo elástico. A tensão residual de laminação antecipa o escoamento da mesa, por isso é subtraída de f_y."},
      {id:"Mnflm", t:"Momento resistente nominal limitado pela FLM",
       f:"M_n,FLM = M_pl − (M_pl − M_r)·(λ − λ_p)/(λ_r − λ_p)",
       s:`M_n,FLM = ${fmt(md.Mpl,3)} − (${fmt(md.Mpl,3)} − ${fmt(md.Mr,3)})·(${fmt(md.lam,2)} − ${fmt(md.lamP,2)})/(${fmt(md.lamR,2)} − ${fmt(md.lamP,2)})`,
       r:`M_n,FLM = ${fmt(md.Mnflm,3)} tf·m`}
    );
  } else {
    passosFlexao.push(
      {id:"Mnflm", t:"Momento resistente nominal limitado pela FLM",
       f:"λ ≤ λ_p  →  M_n,FLM = M_pl",
       s:`λ = ${fmt(md.lam,2)} ≤ λ_p = ${fmt(md.lamP,2)}`,
       r:`M_n,FLM = ${fmt(md.Mnflm,3)} tf·m (sem redução)`}
    );
  }
  passosFlexao.push(
    {id:"Mn", t:"Momento resistente nominal (estado-limite que governa)",
     f:"M_n = mín(M_pl, M_n,FLM)",
     s:`M_n = mín(${fmt(md.Mpl,3)} ; ${fmt(md.Mnflm,3)})`,
     r:`M_n = ${fmt(md.Mn,3)} tf·m   →  governa: ${md.governa}`},
    {id:"Mrd", t:"Momento fletor resistente de cálculo",
     f:"M_rd = M_n / CAL = M_n / 1,65",
     s:`M_rd = ${fmt(md.Mn,3)} / 1,65`,
     r:`M_rd = ${fmt(md.Mrd,3)} tf·m = ${fmt(md.Mrd*KN_PER_TF,2)} kN·m`,
     n:"O divisor 1,65 é o coeficiente de segurança global adotado pela Tabela de Vãos e Cargas GERDAU, que compara resistências a esforços de serviço."}
  );
  secoes.push({titulo:"Resistência à flexão (M_rd)", passos:passosFlexao});

  secoes.push({titulo:"Resistência ao esforço cortante (V_rd)", passos:[
    {id:"Aw", t:"Área efetiva de cisalhamento (alma)",
     f:"A_w = d · t_w",
     s:`A_w = ${fmt(vd.dCm,2)} cm × ${fmt(vd.twCm,3)} cm`,
     r:`A_w = ${fmt(vd.Aw,2)} cm²`,
     n:"Adota-se a altura total d (e não h) multiplicada pela espessura da alma, como faz o catálogo. d e t_w vêm em mm e são divididos por 10."},
    {id:"Vpl", t:"Força cortante de plastificação da alma",
     f:"V_pl = 0,60 · A_w · f_y",
     s:`V_pl = 0,60 × ${fmt(vd.Aw,2)} × ${fmt(FY,2)}`,
     r:`V_pl = ${fmt(vd.Vpl,3)} tf`,
     n:"O fator 0,60 aproxima a tensão de escoamento ao cisalhamento (critério de von Mises: f_y/√3 ≈ 0,577·f_y). Almas de perfis laminados W/HP não são esbeltas, então não há redução adicional por flambagem da alma."},
    {id:"Vrd", t:"Força cortante resistente de cálculo",
     f:"V_rd = V_pl / 1,65",
     s:`V_rd = ${fmt(vd.Vpl,3)} / 1,65`,
     r:`V_rd = ${fmt(vd.Vrd,3)} tf = ${fmt(vd.Vrd*KN_PER_TF,2)} kN`},
  ]});

  secoes.push({titulo:"Verificação dos estados-limites últimos", passos:[
    {id:"verM", t:"Flexão",
     f:"M_sd ≤ M_rd ?",
     s:`${fmt(r.Msd*KN_PER_TF,2)} kN·m ${r.okMomento ? "≤" : ">"} ${fmt(r.Mrd*KN_PER_TF,2)} kN·m`,
     r:`Aproveitamento M_sd/M_rd = ${fmt(r.Msd/r.Mrd*100,1)} %  →  ${r.okMomento ? "OK" : "NÃO PASSA"}`,
     ok:r.okMomento},
    {id:"verV", t:"Cortante",
     f:"V_sd ≤ V_rd ?",
     s:`${fmt(r.Vsd*KN_PER_TF,2)} kN ${r.okCortante ? "≤" : ">"} ${fmt(r.Vrd*KN_PER_TF,2)} kN`,
     r:`Aproveitamento V_sd/V_rd = ${fmt(r.Vsd/r.Vrd*100,1)} %  →  ${r.okCortante ? "OK" : "NÃO PASSA"}`,
     ok:r.okCortante},
  ]});

  if(r.flechaCm !== null){
    secoes.push({titulo:"Verificação do estado-limite de serviço (flecha)", passos:[
      {id:"flecha", t:"Deslocamento máximo sob a carga variável",
       f:"δ = e · P_var · L³ / (E · I_x)",
       s:`δ = ${fmt(pat.e,4)} × ${fmt(r.cargaVar,4)} × ${fmt(r.Lcm,1)}³ / (${fmt(E,0)} × ${fmt(p.Ix,0)})`,
       r:`δ = ${fmt(r.flechaCm,3)} cm = ${fmt(r.flechaCm*10,1)} mm`,
       n:"Tudo em tf e cm: P_var em tf, L em cm, E em tf/cm² e I_x em cm⁴ — o resultado sai em cm."},
      {id:"flechaLim", t:"Deslocamento admissível",
       f:`δ_lim = L / ${r.limiteFlechaFrac}`,
       s:`δ_lim = ${fmt(r.Lcm,1)} / ${r.limiteFlechaFrac}`,
       r:`δ_lim = ${fmt(r.flechaLimCm,3)} cm = ${fmt(r.flechaLimCm*10,1)} mm`,
       n:"Limite escolhido pelo usuário conforme a Tabela C.1 da NBR 8800:2008 (L/180 terças, L/250 vigas de cobertura, L/350 vigas de piso)."},
      {id:"verFlecha", t:"Flecha",
       f:"δ ≤ δ_lim ?",
       s:`${fmt(r.flechaCm,3)} cm ${r.okFlecha ? "≤" : ">"} ${fmt(r.flechaLimCm,3)} cm`,
       r:`Aproveitamento δ/δ_lim = ${fmt(r.flechaCm/r.flechaLimCm*100,1)} %  →  ${r.okFlecha ? "OK" : "NÃO PASSA"}`,
       ok:r.okFlecha},
    ]});
  }

  const errM = (r.Mrd - r.MrdCat) / r.MrdCat * 100;
  const errV = (r.Vrd - r.VrdCat) / r.VrdCat * 100;
  secoes.push({titulo:"Conferência com a tabela impressa GERDAU (TVPA1)", passos:[
    {id:"conf", t:"Comparação com os valores publicados para este perfil",
     f:"M_rd,tabela — coluna \"M RD ASD\"      V_rd,tabela = Q_VRD ASD / 2",
     s:`M_rd: ${fmt(r.Mrd,3)} calculado vs. ${fmt(r.MrdCat,2)} da tabela   ·   V_rd: ${fmt(r.Vrd,3)} calculado vs. ${fmt(r.VrdCat,2)} da tabela (tf)`,
     r:`Δ M_rd = ${errM>=0?"+":""}${fmt(errM,1)} %     Δ V_rd = ${errV>=0?"+":""}${fmt(errV,1)} %`,
     ok: Math.abs(errM) < 2 && Math.abs(errV) < 2,
     n:"Q_VRD ASD da tabela é o cortante somado dos dois apoios; por isso é dividido por 2 para comparar com o V_rd por apoio calculado aqui. Diferenças de até ~2 % vêm de arredondamentos das propriedades geométricas publicadas."},
  ]});

  const numeros = numerarPassos(secoes);
  const nd = id => `Passo ${numeros[id] || "—"}`;

  const saidas = [
    ["M_sd", "Momento fletor solicitante (peso próprio + carga)", `${fmt(r.Msd,3)} tf·m = ${fmt(r.Msd*KN_PER_TF,2)} kN·m`, nd("Msd")],
    ["V_sd", "Força cortante solicitante por apoio", `${fmt(r.Vsd,3)} tf = ${fmt(r.Vsd*KN_PER_TF,2)} kN`, nd("Vsd")],
    ["L_p", "Comprimento destravado limite", `${fmt(r.Lp,2)} m`, nd("Lp")],
    ["M_rd", "Momento fletor resistente de cálculo", `${fmt(r.Mrd,3)} tf·m = ${fmt(r.Mrd*KN_PER_TF,2)} kN·m`, nd("Mrd")],
    ["V_rd", "Força cortante resistente de cálculo", `${fmt(r.Vrd,3)} tf = ${fmt(r.Vrd*KN_PER_TF,2)} kN`, nd("Vrd")],
  ];
  if(r.flechaCm !== null){
    saidas.push(["δ", "Flecha sob a carga variável", `${fmt(r.flechaCm,3)} cm`, nd("flecha")]);
    saidas.push(["δ_lim", "Flecha admissível", `${fmt(r.flechaLimCm,3)} cm`, nd("flechaLim")]);
  }
  saidas.push(["massa", "Consumo de aço do perfil", `${fmt(p.massa,1)} kg/m  →  ${fmt(p.massa*r.vaoM,1)} kg na viga de ${fmt(r.vaoM,2)} m`, "propriedade do perfil × vão"]);

  const sit = ok => ok ? "ATENDE" : "NÃO ATENDE";
  const resumo = [
    ["Flexão (M)", `M_sd = ${fmt(r.Msd*KN_PER_TF,2)} kN·m`, `M_rd = ${fmt(r.Mrd*KN_PER_TF,2)} kN·m`,
      `${fmt(r.Msd/r.Mrd*100,1)} %`, sit(r.okMomento)],
    ["Cortante (V)", `V_sd = ${fmt(r.Vsd*KN_PER_TF,2)} kN`, `V_rd = ${fmt(r.Vrd*KN_PER_TF,2)} kN`,
      `${fmt(r.Vsd/r.Vrd*100,1)} %`, sit(r.okCortante)],
  ];
  if(r.flechaCm !== null){
    resumo.push(["Flecha (ELS)", `δ = ${fmt(r.flechaCm,3)} cm`, `δ_lim = ${fmt(r.flechaLimCm,3)} cm (L/${r.limiteFlechaFrac})`,
      `${fmt(r.flechaCm/r.flechaLimCm*100,1)} %`, sit(r.okFlecha)]);
  }
  // aqui não cabe "aproveitamento": Lb/Lp não é uma razão de esforço, é uma condição de contorno
  resumo.push(["Travamento lateral (FLT)", `L_b = ${fmt(r.LbM,2)} m`, `L_p = ${fmt(r.Lp,2)} m`,
    "—", r.avisoFlt ? "VERIFICAR FLT" : "ATENDE"]);

  const conclusao = r.ok
    ? `O perfil ${p.bitola} (${fmt(p.massa,1)} kg/m) atende a todas as verificações para os dados de entrada informados` +
      (r.avisoFlt ? ", ressalvada a flambagem lateral com torção (L_b > L_p), que deve ser verificada em detalhe." : ".")
    : `O perfil ${p.bitola} NÃO atende a todas as verificações para os dados de entrada informados.`;

  return {
    modo:"viga",
    titulo:"Memorial de cálculo — viga sob flexão",
    perfil:p,
    subtitulo:`NBR 8800:2008 · ${pat.label} · L = ${fmt(r.vaoM,2)} m · P = ${fmt(cargaKN,2)} kN · L_b = ${fmt(r.LbM,2)} m` +
              (r.limiteFlechaFrac ? ` · flecha L/${r.limiteFlechaFrac}` : " · flecha não verificada"),
    entradas, constantes, props, resumo, secoes, saidas, conclusao, ok:r.ok,
    legendaDiagrama: `Diagrama de carregamento, força cortante e momento fletor — ${pat.label.toLowerCase()}, vão de ${fmt(r.vaoM,2)} m, carga de ${fmt(cargaKN,2)} kN (valores da carga aplicada, sem o peso próprio)`,
  };
}

/* ---------------- modelo: coluna (compressão axial) ---------------- */

function modeloColuna(r){
  const p = r.perfil, nc = r.nc;
  const cargaKN = r.cargaAxialTf*KN_PER_TF;
  const rotulo = {"0.65":"engastada-engastada","0.8":"engastada-rotulada","1":"rotulada-rotulada","1.2":"engastada-livre com translação","2":"engastada-livre (balanço)"};
  const rotK = k => rotulo[String(k)] || "condição informada";

  const entradas = [
    ["N_sd", "Carga axial de compressão atuante", `${fmt(cargaKN,2)} kN`, "informado pelo usuário"],
    ["L_x", "Comprimento destravado — flambagem em torno de x-x", `${fmt(r.LxM,2)} m`, "informado pelo usuário"],
    ["K_x", "Coeficiente de flambagem — x-x", `${fmt(r.Kx,2)} (${rotK(r.Kx)})`, "NBR 8800:2008, Anexo E"],
    ["L_y", "Comprimento destravado — flambagem em torno de y-y", `${fmt(r.LyM,2)} m`, "informado pelo usuário"],
    ["K_y", "Coeficiente de flambagem — y-y", `${fmt(r.Ky,2)} (${rotK(r.Ky)})`, "NBR 8800:2008, Anexo E"],
    ["—", "Perfil verificado", p.bitola, "escolhido entre os 108 perfis W/HP da base"],
  ];

  const constantes = [
    ["f_y", "Resistência ao escoamento do aço", "3,45 tf/cm² = 34,5 kN/cm² = 345 MPa", "ASTM A572 Gr.50"],
    ["E", "Módulo de elasticidade do aço", "2000 tf/cm² ≈ 200 GPa", "NBR 8800:2008, item 4.5.2"],
    ["CAL", "Coeficiente de segurança global", "1,65", "critério da tabela GERDAU"],
    ["(KL/r)_lim", "Esbeltez máxima admitida em compressão", "200", "NBR 8800:2008, item 3.3.4"],
    ["g", "Conversão kN ↔ tf", "1 tf = 9,80665 kN", "SI"],
  ];

  const props = [
    ["d", "Altura total do perfil", `${fmt(p.d,1)} mm`],
    ["b_f", "Largura da mesa", `${fmt(p.bf,1)} mm`],
    ["t_f", "Espessura da mesa", `${fmt(p.tf,2)} mm`],
    ["t_w", "Espessura da alma", `${fmt(p.tw,2)} mm`],
    ["h", "Altura da alma", `${fmt(p.h,1)} mm`],
    ["A", "Área bruta da seção", `${fmt(p.A,2)} cm²`],
    ["r_x", "Raio de giração — x-x", `${fmt(p.rx,2)} cm`],
    ["r_y", "Raio de giração — y-y", `${fmt(p.ry,2)} cm`],
    ["massa", "Massa linear do perfil", `${fmt(p.massa,1)} kg/m`],
  ];

  const secoes = [];

  secoes.push({titulo:"Conversão das entradas para as unidades de cálculo", passos:[
    {id:"N", t:"Carga axial, de kN para tf",
     f:"N_sd(tf) = N_sd(kN) / 9,80665",
     s:`N_sd = ${fmt(cargaKN,2)} / 9,80665`,
     r:`N_sd = ${fmt(r.cargaAxialTf,4)} tf`,
     n:"O peso próprio da coluna é desprezado nesta verificação, por ser pequeno frente à carga normal transmitida."},
    {id:"KLx", t:"Comprimento de flambagem em torno de x-x",
     f:"KL_x = K_x · L_x · 100",
     s:`KL_x = ${fmt(r.Kx,2)} × ${fmt(r.LxM,2)} m × 100`,
     r:`KL_x = ${fmt(r.KLxCm,1)} cm`},
    {id:"KLy", t:"Comprimento de flambagem em torno de y-y",
     f:"KL_y = K_y · L_y · 100",
     s:`KL_y = ${fmt(r.Ky,2)} × ${fmt(r.LyM,2)} m × 100`,
     r:`KL_y = ${fmt(r.KLyCm,1)} cm`,
     n:"K traduz as condições de apoio do trecho em comprimento equivalente biarticulado. Os dois eixos podem ter travamentos e condições diferentes."},
  ]});

  secoes.push({titulo:"Propriedades derivadas do perfil", passos:[
    {id:"Ix", t:"Momento de inércia em torno de x-x",
     f:"I_x = r_x² · A",
     s:`I_x = ${fmt(p.rx,2)}² × ${fmt(p.A,2)}`,
     r:`I_x = ${fmt(nc.Ix_cm4,0)} cm⁴`,
     n:"Recalculado a partir do raio de giração publicado, para manter coerência interna entre r, A e I nas fórmulas seguintes."},
    {id:"Iy", t:"Momento de inércia em torno de y-y",
     f:"I_y = r_y² · A",
     s:`I_y = ${fmt(p.ry,2)}² × ${fmt(p.A,2)}`,
     r:`I_y = ${fmt(nc.Iy_cm4,0)} cm⁴`},
  ]});

  secoes.push({titulo:"Flambagem local: fator de redução Q", passos:[
    {id:"Qs", t:"Mesa sob compressão uniforme — Q_s",
     f:"λ = (b_f/2)/t_f      λ_r = 0,56·√(E/f_y)",
     s:`λ = (${fmt(p.bf,1)}/2)/${fmt(p.tf,2)} = ${fmt(nc.qs.lam,2)}     λ_r = ${fmt(nc.qs.lamR,2)}`,
     r:`Q_s = ${fmt(nc.qs.Qs,3)} ${nc.qs.Qs===1 ? "(mesa não-esbelta)" : "(mesa esbelta: há redução)"}`,
     n:"Os limites de esbeltez em compressão uniforme são mais severos que os usados na flexão, porque toda a mesa está comprimida — daí 0,56·√(E/f_y) e não 0,38·√(E/f_y)."},
    {id:"Qa", t:"Alma sob compressão uniforme — Q_a",
     f:"λ = h/t_w      λ_r = 1,49·√(E/f_y)",
     s:`λ = ${fmt(p.h,1)}/${fmt(p.tw,2)} = ${fmt(nc.qa.lam,2)}     λ_r = ${fmt(nc.qa.lamR,2)}`,
     r:`Q_a = ${fmt(nc.qa.Qa,3)} ${nc.qa.Qa===1 ? "(alma não-esbelta)" : `(área efetiva ${fmt(nc.qa.Aef,2)} cm² de ${fmt(p.A,2)} cm²)`}`,
     n: nc.qa.Qa===1
        ? "Alma abaixo do limite: toda a área contribui, Q_a = 1."
        : "Alma esbelta: parte da chapa sai de serviço antes do escoamento. Adota-se a largura efetiva com f = f_y (cálculo não-iterativo, a favor da segurança)."},
    {id:"Q", t:"Fator de seção total",
     f:"Q = Q_s · Q_a",
     s:`Q = ${fmt(nc.qs.Qs,3)} × ${fmt(nc.qa.Qa,3)}`,
     r:`Q = ${fmt(nc.Q,3)}`},
  ]});

  secoes.push({titulo:"Flambagem global e esbeltez", passos:[
    {id:"Ne", t:"Cargas críticas de flambagem elástica (Euler)",
     f:"N_ex = π²·E·I_x/(K_x L_x)²      N_ey = π²·E·I_y/(K_y L_y)²",
     s:`N_ex = π²×${fmt(E,0)}×${fmt(nc.Ix_cm4,0)}/${fmt(r.KLxCm,1)}²   ·   N_ey = π²×${fmt(E,0)}×${fmt(nc.Iy_cm4,0)}/${fmt(r.KLyCm,1)}²`,
     r:`N_ex = ${fmt(nc.Nex,2)} tf     N_ey = ${fmt(nc.Ney,2)} tf     N_e = mín = ${fmt(nc.Ne,2)} tf  (governa o eixo ${nc.eixoGovernante})`,
     n:"Vale o menor dos dois: a coluna flamba no eixo mais fraco disponível, considerando também os travamentos de cada direção."},
    {id:"esb", t:"Índices de esbeltez geométricos",
     f:"λ_x = KL_x/r_x      λ_y = KL_y/r_y      limite 200",
     s:`λ_x = ${fmt(r.KLxCm,1)}/${fmt(p.rx,2)} = ${fmt(nc.lambdaKLx,1)}     λ_y = ${fmt(r.KLyCm,1)}/${fmt(p.ry,2)} = ${fmt(nc.lambdaKLy,1)}`,
     r:`KL/r máximo = ${fmt(nc.esbeltezMax,1)}  (limite 200)`,
     ok:r.esbeltezOk,
     n:"Limite construtivo da NBR 8800:2008, item 3.3.4: acima de 200 a peça é esbelta demais para uso como elemento comprimido, mesmo que a conta de resistência feche."},
    {id:"lambda0", t:"Índice de esbeltez reduzido",
     f:"λ₀ = √(Q · A · f_y / N_e)",
     s:`λ₀ = √(${fmt(nc.Q,3)} × ${fmt(p.A,2)} × ${fmt(FY,2)} / ${fmt(nc.Ne,2)})`,
     r:`λ₀ = ${fmt(nc.lambda0,3)}`,
     n:"Compara a resistência ao escoamento da seção efetiva com a carga crítica elástica: λ₀ pequeno indica ruína por escoamento, λ₀ grande indica ruína por flambagem."},
    {id:"chi", t:"Fator de redução por flambagem global",
     f: nc.lambda0 <= 1.5 ? "λ₀ ≤ 1,5  →  χ = 0,658^(λ₀²)" : "λ₀ > 1,5  →  χ = 0,877/λ₀²",
     s: nc.lambda0 <= 1.5 ? `χ = 0,658^(${fmt(nc.lambda0,3)}²)` : `χ = 0,877/${fmt(nc.lambda0,3)}²`,
     r:`χ = ${fmt(nc.chi,4)}`,
     n:"O primeiro ramo cobre a flambagem inelástica (com tensões residuais); o segundo, a flambagem elástica de Euler afetada por imperfeições."},
  ]});

  secoes.push({titulo:"Resistência à compressão e verificação", passos:[
    {id:"Nn", t:"Força axial resistente nominal",
     f:"N_n = χ · Q · A · f_y",
     s:`N_n = ${fmt(nc.chi,4)} × ${fmt(nc.Q,3)} × ${fmt(p.A,2)} × ${fmt(FY,2)}`,
     r:`N_n = ${fmt(nc.Nn,3)} tf`},
    {id:"NcRd", t:"Força axial resistente de cálculo",
     f:"N_c,Rd = N_n / 1,65",
     s:`N_c,Rd = ${fmt(nc.Nn,3)} / 1,65`,
     r:`N_c,Rd = ${fmt(nc.NcRd,3)} tf = ${fmt(nc.NcRd*KN_PER_TF,2)} kN`},
    {id:"verN", t:"Verificação da compressão axial",
     f:"N_sd ≤ N_c,Rd ?",
     s:`${fmt(cargaKN,2)} kN ${r.okAxial ? "≤" : ">"} ${fmt(nc.NcRd*KN_PER_TF,2)} kN`,
     r:`Aproveitamento N_sd/N_c,Rd = ${fmt(r.cargaAxialTf/nc.NcRd*100,1)} %  →  ${r.okAxial ? "OK" : "NÃO PASSA"}`,
     ok:r.okAxial},
  ]});

  const numeros = numerarPassos(secoes);
  const nd = id => `Passo ${numeros[id] || "—"}`;

  const saidas = [
    ["Q", "Fator de redução por flambagem local", fmt(nc.Q,3), nd("Q")],
    ["N_e", `Carga crítica elástica (eixo ${nc.eixoGovernante})`, `${fmt(nc.Ne,2)} tf = ${fmt(nc.Ne*KN_PER_TF,1)} kN`, nd("Ne")],
    ["λ₀", "Índice de esbeltez reduzido", fmt(nc.lambda0,3), nd("lambda0")],
    ["χ", "Fator de redução por flambagem global", fmt(nc.chi,4), nd("chi")],
    ["KL/r", "Esbeltez geométrica máxima", `${fmt(nc.esbeltezMax,1)} (limite 200)`, nd("esb")],
    ["N_c,Rd", "Força axial de compressão resistente", `${fmt(nc.NcRd,3)} tf = ${fmt(nc.NcRd*KN_PER_TF,2)} kN`, nd("NcRd")],
    ["massa", "Consumo de aço do perfil", `${fmt(p.massa,1)} kg/m  →  ${fmt(p.massa*Math.max(r.LxM,r.LyM),1)} kg no trecho mais longo`, "propriedade do perfil × comprimento"],
  ];

  const sitC = ok => ok ? "ATENDE" : "NÃO ATENDE";
  const resumo = [
    ["Compressão axial (N)", `N_sd = ${fmt(cargaKN,2)} kN`, `N_c,Rd = ${fmt(nc.NcRd*KN_PER_TF,2)} kN`,
      `${fmt(r.cargaAxialTf/nc.NcRd*100,1)} %`, sitC(r.okAxial)],
    ["Esbeltez (KL/r)", `${fmt(nc.esbeltezMax,1)} (eixo ${nc.eixoGovernante})`, "limite 200",
      `${fmt(nc.esbeltezMax/200*100,1)} %`, sitC(r.esbeltezOk)],
  ];

  const conclusao = r.ok
    ? `O perfil ${p.bitola} (${fmt(p.massa,1)} kg/m) resiste à carga axial informada e respeita o limite de esbeltez.`
    : `O perfil ${p.bitola} NÃO atende: ${!r.okAxial ? "a resistência à compressão é insuficiente" : ""}${(!r.okAxial && !r.esbeltezOk) ? " e " : ""}${!r.esbeltezOk ? "a esbeltez KL/r ultrapassa 200" : ""}.`;

  return {
    modo:"coluna",
    titulo:"Memorial de cálculo — coluna sob compressão axial",
    perfil:p,
    subtitulo:`NBR 8800:2008 · N_sd = ${fmt(cargaKN,2)} kN · KL_x = ${fmt(r.KLxCm/100,2)} m · KL_y = ${fmt(r.KLyCm/100,2)} m`,
    entradas, constantes, props, resumo, secoes, saidas, conclusao, ok:r.ok,
    legendaDiagrama: `Esquema da coluna — carga axial de ${fmt(cargaKN,2)} kN, comprimentos destravados e forma de flambagem em cada eixo`,
  };
}

function numerarPassos(secoes){
  const numeros = {};
  let n = 0;
  secoes.forEach((sec, si)=>{
    sec.num = si + 1;
    sec.passos.forEach(ps=>{ n++; ps.num = n; if(ps.id) numeros[ps.id] = n; });
  });
  return numeros;
}

function modeloDe(r){
  return currentMode === "coluna" ? modeloColuna(r) : modeloViga(r);
}

/* ---------------- memorial em HTML (tela + relatório PDF) ---------------- */

function mtabela(cabecalho, linhas, classes){
  const th = cabecalho.map(c=>`<th>${c}</th>`).join("");
  const tr = linhas.map(l=>`<tr>${l.map((c,i)=>`<td class="${classes[i]||""}">${mathHtml(c)}</td>`).join("")}</tr>`).join("");
  return `<div class="mtable-wrap"><table class="mtable"><thead><tr>${th}</tr></thead><tbody>${tr}</tbody></table></div>`;
}

function renderModeloHtml(model, idx, opts){
  const comExportar = !(opts && opts.exportar === false);
  const secoesHtml = model.secoes.map(sec=>{
    const passos = sec.passos.map(ps=>`
      <div class="mstep">
        <div class="mtitle">Passo ${ps.num} · ${mathHtml(ps.t)}</div>
        <div class="mformula">${mathHtml(ps.f)}</div>
        <div class="msub">${mathHtml(ps.s)}</div>
        <div class="mres">${mathHtml(ps.r)}${ps.ok===undefined ? "" : " " + okBadge(ps.ok)}</div>
        ${ps.n ? `<div class="mnote">${mathHtml(ps.n)}</div>` : ""}
      </div>`).join("");
    return `<div class="msection"><h4>${model.secoes.length ? sec.num + " · " : ""}${mathHtml(sec.titulo)}</h4>${passos}</div>`;
  }).join("");

  // no relatório impresso os botões não são emitidos: em papel não há o que exportar
  const exportSection = !comExportar ? "" : `<div class="msection no-print">
    <h4>Exportar este memorial</h4>
    <div class="smath-actions">
      <button class="smath-btn" type="button" data-idx="${idx}">⇪ Exportar para SMath Studio</button>
      <button class="word-btn" type="button" data-widx="${idx}">📄 Relatório Word (.docx)</button>
      <button class="pdf-btn" type="button" data-pidx="${idx}">🖨 Relatório PDF</button>
      <span class="dl-status" data-dlstatus-txt="${idx}"></span>
    </div>
  </div>`;

  const resumoHtml = !model.resumo ? "" : `<div class="msection"><h4>Resumo da verificação</h4>
    ${mtabela(["Verificação","Solicitante","Resistente / limite","Aproveitamento","Situação"], model.resumo, ["","val","val","val","sit"])}</div>`;

  return `
    ${resumoHtml}
    <div class="msection"><h4>A · Variáveis de entrada (informadas)</h4>
      ${mtabela(["Símbolo","Descrição","Valor","Origem"], model.entradas, ["sym","","val","src"])}</div>
    <div class="msection"><h4>B · Constantes e critérios adotados</h4>
      ${mtabela(["Símbolo","Descrição","Valor","Fonte"], model.constantes, ["sym","","val","src"])}</div>
    <div class="msection"><h4>C · Propriedades do perfil ${model.perfil.bitola} (tabela GERDAU)</h4>
      ${mtabela(["Símbolo","Descrição","Valor"], model.props, ["sym","","val"])}</div>
    ${secoesHtml}
    <div class="msection"><h4>D · Resumo das variáveis de saída</h4>
      ${mtabela(["Símbolo","Descrição","Valor obtido","Onde foi obtido"], model.saidas, ["sym","","val","src"])}
      <div class="mconclusao ${model.ok ? "ok" : "fail"}">${mathHtml(model.conclusao)}</div></div>
    ${exportSection}
  `;
}

function renderMemorial(r, idx, opts){ return renderModeloHtml(modeloViga(r), idx, opts); }

function render(resultados){
  els.cards.innerHTML = "";
  if(resultados.length === 0){
    els.resMeta.textContent = "";
    els.moreBtn.hidden = true;
    currentResults = [];
    sincronizarSelecao();
    els.cards.innerHTML = `<div class="empty">
      <h3>Nenhum perfil atende</h3>
      <p>Nenhum dos 108 perfis da base passa em momento, cortante e flecha para os valores informados.</p>
      <ul>
        <li>Reduza o vão ou a carga, ou</li>
        <li>Aumente o limite de flecha (ex.: de L/350 para L/250), ou</li>
        <li>Verifique se a carga em kN está correta.</li>
      </ul>
    </div>`;
    return;
  }
  els.resMeta.textContent = `${resultados.length} de 108 perfis atendem`;
  const toShow = resultados.slice(0, shown);
  currentResults = toShow;
  toShow.forEach((r,i)=>{
    const p = r.perfil;
    const card = document.createElement("div");
    card.className = "card" + (i===0 ? " best" : "");
    const fltNote = r.avisoFlt ? `<div class="flt-note"><span aria-hidden="true">⚠</span><span>L<sub>b</sub> (${fmt(r.LbM)} m) &gt; L<sub>p</sub> (${fmt(r.Lp)} m) deste perfil: a flambagem lateral com torção pode reduzir M<sub>rd</sub> abaixo do calculado aqui. Reduza o espaçamento de travamento ou peça verificação detalhada.</span></div>` : "";
    const flechaCheck = r.flechaCm!==null ? `
      <div class="check">
        <div class="label">Flecha</div>
        <div class="value">${fmt(r.flechaCm)} / ${fmt(r.flechaLimCm)} cm</div>
        <span class="pill ${r.okFlecha?'ok':'fail'}">${r.okFlecha?'OK':'Falha'}</span>
      </div>` : "";
    card.innerHTML = `
      <div class="card-top">
        <div class="card-name">
          <span class="bitola">${p.bitola}</span>
          <span class="massa">${fmt(p.massa,1)} kg/m</span>
        </div>
        ${i===0 ? '<span class="badge">Mais leve que atende</span>' : `<span class="rank">#${i+1}</span>`}
        <button class="select-btn" type="button" data-selidx="${i}" title="Usar este perfil nos relatórios PDF e Word">Selecionar</button>
        <button class="card-min-btn" type="button" title="Minimizar este perfil" aria-label="Minimizar este perfil">⌄</button>
      </div>
      <div class="profile-fig">${buildProfileSvg(p)}</div>
      <div class="checks">
        <div class="check">
          <div class="label">Momento</div>
          <div class="value">${fmt(r.Msd*KN_PER_TF)} / ${fmt(r.Mrd*KN_PER_TF)} kN·m</div>
          <div class="sub">${fmt(r.Msd,3)} / <b>${fmt(r.Mrd,3)}</b> tf·m — tabela GERDAU: <b>${fmt(r.MrdCat,2)}</b> tf·m</div>
          <span class="pill ${r.okMomento?'ok':'fail'}">${r.okMomento?'OK':'Falha'}</span>
        </div>
        <div class="check">
          <div class="label">Cortante</div>
          <div class="value">${fmt(r.Vsd*KN_PER_TF)} / ${fmt(r.Vrd*KN_PER_TF)} kN</div>
          <div class="sub">${fmt(r.Vsd,3)} / <b>${fmt(r.Vrd,3)}</b> tf — tabela GERDAU: <b>${fmt(r.VrdCat,2)}</b> tf</div>
          <span class="pill ${r.okCortante?'ok':'fail'}">${r.okCortante?'OK':'Falha'}</span>
        </div>
        ${flechaCheck}
      </div>
      ${fltNote}
      <details class="memorial" data-midx="${i}" ${i===0 ? "open" : ""}>
        <summary>Ver memorial de cálculo completo — entradas, passo a passo e saídas</summary>
        <div class="memorial-body">${i===0 ? renderMemorial(r, i) : ""}</div>
      </details>
    `;
    els.cards.appendChild(card);
  });
  els.moreBtn.hidden = resultados.length <= shown;
  refreshDownloadButtons();
  sincronizarSelecao();
}

function buildSMathExportColuna(r){
  const p = r.perfil, nc = r.nc;
  const L = [];
  const add = (s="") => L.push(s);
  add("g:=9.80665*m/s^2");
  add("tf:=1000*kg*g");
  add("f_y:=3.45*tf/cm^2");
  add("E:=2000*tf/cm^2");
  add("CAL:=1.65");
  add("");
  add(`A:=${fmtSM(p.A,3)}*cm^2`);
  add(`r_x:=${fmtSM(p.rx,3)}*cm`);
  add(`r_y:=${fmtSM(p.ry,3)}*cm`);
  add(`b_f:=${fmtSM(p.bf,1)}*mm`);
  add(`t_f:=${fmtSM(p.tf,2)}*mm`);
  add(`h_w:=${fmtSM(p.h,1)}*mm`);
  add(`t_w:=${fmtSM(p.tw,2)}*mm`);
  add("");
  add(`Lx:=${fmtSM(r.LxM,3)}*m`);
  add(`Kx:=${fmtSM(r.Kx,2)}`);
  add(`Ly:=${fmtSM(r.LyM,3)}*m`);
  add(`Ky:=${fmtSM(r.Ky,2)}`);
  add(`N_sd:=${fmtSM(r.cargaAxialTf,4)}*tf`);
  add("");
  add("lambda_fl:=(b_f/2)/t_f");
  add("lambda_fl_r:=0.56*sqrt(E/f_y)");
  add(nc.qs.Qs===1 ? "Q_s:=1" : "Q_s:=1.415-0.74*lambda_fl*sqrt(f_y/E)");
  add("lambda_al:=h_w/t_w");
  add("lambda_al_r:=1.49*sqrt(E/f_y)");
  if(nc.qa.Qa===1){
    add("Q_a:=1");
  } else {
    add("b_ef:=1.92*t_w*sqrt(E/f_y)*(1-0.34/lambda_al*sqrt(E/f_y))");
    add("A_ef:=A-(h_w-b_ef)*t_w");
    add("Q_a:=A_ef/A");
  }
  add("Q:=Q_s*Q_a");
  add("");
  add("N_ex:=pi^2*E*r_x^2*A/(Kx*Lx)^2");
  add("N_ey:=pi^2*E*r_y^2*A/(Ky*Ly)^2");
  add(nc.eixoGovernante==="y-y" ? "N_e:=N_ey" : "N_e:=N_ex");
  add("lambda_0:=sqrt(Q*A*f_y/N_e)");
  add(nc.lambda0<=1.5 ? "chi:=0.658^(lambda_0^2)" : "chi:=0.877/lambda_0^2");
  add("N_c_Rd:=chi*Q*A*f_y/CAL");
  return L.join("\n");
}

/* ---------------- exportação para Word (.docx), gerado sem bibliotecas externas ---------------- */

function crc32(bytes){
  if(!crc32.table){
    const t = [];
    for(let n=0;n<256;n++){
      let c = n;
      for(let k=0;k<8;k++) c = (c&1) ? (0xEDB88320 ^ (c>>>1)) : (c>>>1);
      t[n] = c>>>0;
    }
    crc32.table = t;
  }
  let crc = 0xFFFFFFFF;
  for(let i=0;i<bytes.length;i++){
    crc = crc32.table[(crc ^ bytes[i]) & 0xFF] ^ (crc >>> 8);
  }
  return (crc ^ 0xFFFFFFFF) >>> 0;
}

function makeZip(files){
  const encoder = new TextEncoder();
  const parts = [];
  const centralParts = [];
  let offset = 0;

  for(const f of files){
    const nameBytes = encoder.encode(f.name);
    const data = f.data;
    const crc = crc32(data);
    const size = data.length;

    const local = new Uint8Array(30 + nameBytes.length);
    const lv = new DataView(local.buffer);
    lv.setUint32(0, 0x04034b50, true);
    lv.setUint16(4, 20, true);
    lv.setUint16(6, 0, true);
    lv.setUint16(8, 0, true);
    lv.setUint16(10, 0, true);
    lv.setUint16(12, 0, true);
    lv.setUint32(14, crc, true);
    lv.setUint32(18, size, true);
    lv.setUint32(22, size, true);
    lv.setUint16(26, nameBytes.length, true);
    lv.setUint16(28, 0, true);
    local.set(nameBytes, 30);
    parts.push(local, data);

    const central = new Uint8Array(46 + nameBytes.length);
    const cv = new DataView(central.buffer);
    cv.setUint32(0, 0x02014b50, true);
    cv.setUint16(4, 20, true);
    cv.setUint16(6, 20, true);
    cv.setUint16(8, 0, true);
    cv.setUint16(10, 0, true);
    cv.setUint16(12, 0, true);
    cv.setUint16(14, 0, true);
    cv.setUint32(16, crc, true);
    cv.setUint32(20, size, true);
    cv.setUint32(24, size, true);
    cv.setUint16(28, nameBytes.length, true);
    cv.setUint16(30, 0, true);
    cv.setUint16(32, 0, true);
    cv.setUint16(34, 0, true);
    cv.setUint16(36, 0, true);
    cv.setUint32(38, 0, true);
    cv.setUint32(42, offset, true);
    central.set(nameBytes, 46);
    centralParts.push(central);

    offset += local.length + data.length;
  }

  const centralStart = offset;
  const centralSize = centralParts.reduce((s,c)=>s+c.length, 0);

  const end = new Uint8Array(22);
  const ev = new DataView(end.buffer);
  ev.setUint32(0, 0x06054b50, true);
  ev.setUint16(8, files.length, true);
  ev.setUint16(10, files.length, true);
  ev.setUint32(12, centralSize, true);
  ev.setUint32(16, centralStart, true);

  return new Blob([...parts, ...centralParts, end], {type:"application/vnd.openxmlformats-officedocument.wordprocessingml.document"});
}

function xmlEscape(s){
  return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;");
}
function wPara(text, opts={}){
  const {bold=false, italic=false, size=22, align=null, spaceBefore=0, spaceAfter=120, color=null} = opts;
  let pPr = `<w:spacing w:before="${spaceBefore}" w:after="${spaceAfter}"/>`;
  if(align) pPr += `<w:jc w:val="${align}"/>`;
  let rPr = `<w:sz w:val="${size}"/><w:szCs w:val="${size}"/>`;
  if(bold) rPr += "<w:b/>";
  if(italic) rPr += "<w:i/>";
  if(color) rPr += `<w:color w:val="${color}"/>`;
  return `<w:p><w:pPr>${pPr}<w:rPr>${rPr}</w:rPr></w:pPr><w:r><w:rPr>${rPr}</w:rPr><w:t xml:space="preserve">${xmlEscape(text)}</w:t></w:r></w:p>`;
}

/* --- tabelas no Word: largura útil = 11906 − 2×1134 = 9638 twips --- */
const W_PAGE = 9638;

function wCell(text, largura, opts={}){
  const {bold=false, size=17, shade=null, align=null} = opts;
  const shd = shade ? `<w:shd w:val="clear" w:color="auto" w:fill="${shade}"/>` : "";
  const par = wPara(text, {bold, size, align, spaceBefore:20, spaceAfter:20});
  return `<w:tc><w:tcPr><w:tcW w:w="${largura}" w:type="dxa"/>${shd}<w:vAlign w:val="top"/></w:tcPr>${par}</w:tc>`;
}

function wTabela(linhas, larguras){
  const bordas = `<w:tblBorders>${["top","left","bottom","right","insideH","insideV"]
    .map(s=>`<w:${s} w:val="single" w:sz="4" w:space="0" w:color="BFBFBF"/>`).join("")}</w:tblBorders>`;
  const grid = larguras.map(w=>`<w:gridCol w:w="${w}"/>`).join("");
  const corpo = linhas.map((cells, ri)=>{
    const cabecalho = ri === 0;
    const tcs = cells.map((c, ci)=> wCell(mathTxt(c), larguras[ci] || 1000,
      {bold:cabecalho, shade: cabecalho ? "EDF1F4" : null, size: cabecalho ? 16 : 17})).join("");
    return `<w:tr>${cabecalho ? '<w:trPr><w:tblHeader/></w:trPr>' : ""}${tcs}</w:tr>`;
  }).join("");
  const total = larguras.reduce((a,b)=>a+b, 0);
  // parágrafo vazio depois da tabela: impede que duas tabelas seguidas se fundam no Word
  // a ordem dos filhos de w:tblPr segue o schema OOXML: tblW, tblBorders, tblLayout
  return `<w:tbl><w:tblPr><w:tblW w:w="${total}" w:type="dxa"/>${bordas}<w:tblLayout w:type="fixed"/></w:tblPr>` +
         `<w:tblGrid>${grid}</w:tblGrid>${corpo}</w:tbl>` + wPara("", {size:8, spaceAfter:0});
}

// Figura embutida: <w:drawing> inline apontando para a relação r:embed da imagem.
// cx/cy em EMU definem o tamanho com que o Word desenha (a imagem continua redimensionável).
function wFigura(fig, numero){
  const id = 100 + numero;
  const desenho = `<w:p><w:pPr><w:jc w:val="center"/><w:spacing w:before="160" w:after="40"/></w:pPr><w:r><w:drawing>` +
    `<wp:inline distT="0" distB="0" distL="0" distR="0">` +
      `<wp:extent cx="${fig.cx}" cy="${fig.cy}"/><wp:effectExtent l="0" t="0" r="0" b="0"/>` +
      `<wp:docPr id="${id}" name="Figura ${numero}" descr="${xmlEscape(mathTxt(fig.legenda))}"/>` +
      `<wp:cNvGraphicFramePr><a:graphicFrameLocks noChangeAspect="1"/></wp:cNvGraphicFramePr>` +
      `<a:graphic><a:graphicData uri="http://schemas.openxmlformats.org/drawingml/2006/picture">` +
        `<pic:pic><pic:nvPicPr><pic:cNvPr id="${id}" name="${fig.nome}"/><pic:cNvPicPr/></pic:nvPicPr>` +
        `<pic:blipFill><a:blip r:embed="${fig.relId}"/><a:stretch><a:fillRect/></a:stretch></pic:blipFill>` +
        `<pic:spPr><a:xfrm><a:off x="0" y="0"/><a:ext cx="${fig.cx}" cy="${fig.cy}"/></a:xfrm>` +
        `<a:prstGeom prst="rect"><a:avLst/></a:prstGeom></pic:spPr></pic:pic>` +
      `</a:graphicData></a:graphic>` +
    `</wp:inline></w:drawing></w:r></w:p>`;
  const legenda = wPara(mathTxt(`Figura ${numero} — ${fig.legenda}`),
    {italic:true, size:16, align:"center", color:"555555", spaceAfter:200});
  return desenho + legenda;
}

function wTituloSecao(texto){
  return wPara(mathTxt(texto), {bold:true, size:24, spaceBefore:280, spaceAfter:120, color:"24557E"});
}

/* --- memorial completo em .docx, a partir do mesmo modelo usado na tela --- */

function buildWordParas(model, figuras){
  figuras = figuras || [];
  const figura = n => figuras[n] ? wFigura(figuras[n], n+1) : "";
  const p = model.perfil;
  const agora = new Date();
  const dataStr = agora.toLocaleDateString("pt-BR") + " " + agora.toLocaleTimeString("pt-BR", {hour:"2-digit", minute:"2-digit"});
  const paras = [];

  paras.push(wPara("Vão & Carga — memorial de cálculo", {bold:true, size:34, align:"center", spaceAfter:60}));
  paras.push(wPara(mathTxt(model.titulo), {size:24, align:"center", spaceAfter:60}));
  paras.push(wPara(`Perfil: ${p.bitola}  —  ${fmt(p.massa,1)} kg/m`, {bold:true, size:26, align:"center", spaceAfter:120}));
  paras.push(wPara(mathTxt(model.subtitulo), {size:18, align:"center", color:"555555", spaceAfter:60}));
  paras.push(wPara(`Relatório gerado em ${dataStr}`, {size:16, align:"center", color:"777777", spaceAfter:240}));

  if(model.resumo){
    paras.push(wTituloSecao("Resumo da verificação"));
    paras.push(wTabela([["Verificação","Solicitante","Resistente / limite","Aproveit.","Situação"], ...model.resumo],
      [2100, 2200, 2500, 1000, 1838]));
  }

  // Figura 1: diagrama de carregamento (viga) ou esquema da coluna
  if(figuras[0]) paras.push(figura(0));

  paras.push(wTituloSecao("A. Variáveis de entrada (informadas pelo usuário)"));
  paras.push(wTabela([["Símbolo","Descrição","Valor","Origem"], ...model.entradas], [1150, 3700, 2500, 2288]));

  paras.push(wTituloSecao("B. Constantes e critérios adotados"));
  paras.push(wTabela([["Símbolo","Descrição","Valor","Fonte"], ...model.constantes], [1150, 3200, 2700, 2588]));

  paras.push(wTituloSecao(`C. Propriedades do perfil ${p.bitola} (Tabela de Vãos e Cargas GERDAU)`));
  paras.push(wTabela([["Símbolo","Descrição","Valor"], ...model.props], [1300, 5200, 3138]));

  // Figura 2: desenho cotado da seção transversal do perfil
  if(figuras[1]) paras.push(figura(1));

  model.secoes.forEach(sec=>{
    paras.push(wTituloSecao(`${sec.num}. ${sec.titulo}`));
    sec.passos.forEach(ps=>{
      paras.push(wPara(mathTxt(`Passo ${ps.num} — ${ps.t}`), {bold:true, size:20, spaceBefore:140, spaceAfter:40}));
      paras.push(wPara(mathTxt(`Fórmula:      ${ps.f}`), {size:18, spaceAfter:20}));
      paras.push(wPara(mathTxt(`Substituindo: ${ps.s}`), {size:18, spaceAfter:20}));
      const marca = ps.ok === undefined ? "" : (ps.ok ? "   [ATENDE]" : "   [NÃO ATENDE]");
      paras.push(wPara(mathTxt(`Resultado:    ${ps.r}${marca}`), {bold:true, size:18,
        color: ps.ok === undefined ? null : (ps.ok ? "256B4D" : "A1332C"), spaceAfter:30}));
      if(ps.n) paras.push(wPara(mathTxt(ps.n), {italic:true, size:16, color:"666666", spaceAfter:60}));
    });
  });

  paras.push(wTituloSecao("D. Resumo das variáveis de saída"));
  paras.push(wTabela([["Símbolo","Descrição","Valor obtido","Onde foi obtido"], ...model.saidas], [1150, 3500, 3000, 1988]));
  paras.push(wPara(mathTxt(model.conclusao), {bold:true, size:20, color: model.ok ? "256B4D" : "A1332C", spaceBefore:120, spaceAfter:120}));

  paras.push(wPara("Ferramenta de pré-dimensionamento — não substitui a verificação e a ART de um engenheiro responsável. Em especial, não são cobertos aqui: flambagem lateral com torção fora do regime Lb ≤ Lp, ligações, estabilidade global, vibrações e demais estados-limites. Fonte dos dados de perfil: Tabela de Vãos e Cargas GERDAU, 5ª ed. 2018.",
    {italic:true, size:15, color:"777777", spaceBefore:320}));
  return paras;
}

const NS_DOC = [
  'xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"',
  'xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"',
  'xmlns:wp="http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing"',
  'xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main"',
  'xmlns:pic="http://schemas.openxmlformats.org/drawingml/2006/picture"',
].join(" ");

function buildDocxBlob(paras, figuras){
  figuras = figuras || [];
  const body = paras.join("") + '<w:sectPr><w:pgSz w:w="11906" w:h="16838"/><w:pgMar w:top="1134" w:right="1134" w:bottom="1134" w:left="1134"/></w:sectPr>';
  const docXml = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n<w:document ${NS_DOC}><w:body>${body}</w:body></w:document>`;
  const pngDefault = figuras.length ? '<Default Extension="png" ContentType="image/png"/>' : "";
  const contentTypes = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/>${pngDefault}<Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/></Types>`;
  const rootRels = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/></Relationships>`;
  const relsImagens = figuras.map(f=>
    `<Relationship Id="${f.relId}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/image" Target="media/${f.nome}"/>`).join("");
  const docRels = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">${relsImagens}</Relationships>`;

  const enc = new TextEncoder();
  const files = [
    {name:"[Content_Types].xml", data:enc.encode(contentTypes)},
    {name:"_rels/.rels", data:enc.encode(rootRels)},
    {name:"word/document.xml", data:enc.encode(docXml)},
    {name:"word/_rels/document.xml.rels", data:enc.encode(docRels)},
    ...figuras.map(f=>({name:`word/media/${f.nome}`, data:f.bytes})),
  ];
  return makeZip(files);
}

// assíncrono por causa da rasterização dos SVG (diagrama e seção transversal)
async function buildWordBlobFor(r){
  const model = modeloDe(r);
  const figuras = await coletarFiguras(r, model);
  return buildDocxBlob(buildWordParas(model, figuras), figuras);
}

function renderColunaMemorial(r, idx, opts){ return renderModeloHtml(modeloColuna(r), idx, opts); }

function renderColuna(resultados){
  els.cards.innerHTML = "";
  if(resultados.length === 0){
    els.resMeta.textContent = "";
    els.moreBtn.hidden = true;
    currentResults = [];
    sincronizarSelecao();
    els.cards.innerHTML = `<div class="empty">
      <h3>Nenhum perfil atende</h3>
      <p>Nenhum dos 108 perfis da base resiste à carga axial e/ou satisfaz o limite de esbeltez (KL/r ≤ 200) para os comprimentos informados.</p>
      <ul>
        <li>Reduza a carga axial, ou</li>
        <li>Reduza Lx/Ly (adicione travamentos intermediários), ou</li>
        <li>Revise Kx/Ky conforme as condições reais de apoio.</li>
      </ul>
    </div>`;
    return;
  }
  els.resMeta.textContent = `${resultados.length} de 108 perfis atendem`;
  const toShow = resultados.slice(0, shown);
  currentResults = toShow;
  toShow.forEach((r,i)=>{
    const p = r.perfil, nc = r.nc;
    const card = document.createElement("div");
    card.className = "card" + (i===0 ? " best" : "");
    const esbNote = !r.esbeltezOk ? `<div class="flt-note"><span aria-hidden="true">⚠</span><span>KL/r = ${fmt(nc.esbeltezMax,1)} ultrapassa o limite de 200 (NBR 8800:2008, 3.3.4) — perfil descartado por esbeltez excessiva, mesmo que a resistência axial isolada pudesse ser suficiente.</span></div>` : "";
    card.innerHTML = `
      <div class="card-top">
        <div class="card-name">
          <span class="bitola">${p.bitola}</span>
          <span class="massa">${fmt(p.massa,1)} kg/m</span>
        </div>
        ${i===0 ? '<span class="badge">Mais leve que atende</span>' : `<span class="rank">#${i+1}</span>`}
        <button class="select-btn" type="button" data-selidx="${i}" title="Usar este perfil nos relatórios PDF e Word">Selecionar</button>
        <button class="card-min-btn" type="button" title="Minimizar este perfil" aria-label="Minimizar este perfil">⌄</button>
      </div>
      <div class="profile-fig">${buildProfileSvg(p)}</div>
      <div class="checks">
        <div class="check">
          <div class="label">Compressão axial</div>
          <div class="value">${fmt(r.cargaAxialTf*KN_PER_TF)} / ${fmt(nc.NcRd*KN_PER_TF)} kN</div>
          <div class="sub">${fmt(r.cargaAxialTf,3)} / <b>${fmt(nc.NcRd,3)}</b> tf &nbsp; (χ=${fmt(nc.chi,3)}, Q=${fmt(nc.Q,3)})</div>
          <span class="pill ${r.okAxial?'ok':'fail'}">${r.okAxial?'OK':'Falha'}</span>
        </div>
        <div class="check">
          <div class="label">Esbeltez KL/r</div>
          <div class="value">${fmt(nc.esbeltezMax,1)} / 200</div>
          <div class="sub">eixo governante: ${nc.eixoGovernante}</div>
          <span class="pill ${r.esbeltezOk?'ok':'fail'}">${r.esbeltezOk?'OK':'Falha'}</span>
        </div>
      </div>
      ${esbNote}
      <details class="memorial" data-midx="${i}" ${i===0 ? "open" : ""}>
        <summary>Ver memorial de cálculo completo — entradas, passo a passo e saídas</summary>
        <div class="memorial-body">${i===0 ? renderColunaMemorial(r, i) : ""}</div>
      </details>
    `;
    els.cards.appendChild(card);
  });
  els.moreBtn.hidden = resultados.length <= shown;
  refreshDownloadButtons();
  sincronizarSelecao();
}

// O memorial de um perfil (3 tabelas + 15 a 26 passos) só é montado quando o usuário
// abre aquele <details>. Sem isso, arrastar o slider do vão recalcularia seis memoriais
// completos a cada quadro. O evento "toggle" não borbulha: daí o listener em captura.
function memorialHtmlPara(r, idx){
  return currentMode === "coluna" ? renderColunaMemorial(r, idx) : renderMemorial(r, idx);
}
els.cards.addEventListener("toggle", (ev)=>{
  const det = ev.target;
  if(!det.classList || !det.classList.contains("memorial") || !det.open) return;
  const corpo = det.querySelector(".memorial-body");
  if(!corpo || corpo.innerHTML.trim() !== "") return;
  const idx = Number(det.dataset.midx);
  const r = currentResults[idx];
  if(r) corpo.innerHTML = memorialHtmlPara(r, idx);
}, true);

/* ---------------- perfil escolhido para os relatórios ---------------- */

// A escolha é guardada pela bitola: assim ela sobrevive a um recálculo (mudar vão, carga,
// mostrar mais alternativas). Se o perfil escolhido deixar de atender, cai no mais leve.
function sincronizarSelecao(){
  const temResultados = currentResults.length > 0;
  if(els.reportBar) els.reportBar.hidden = !temResultados;
  if(!temResultados){
    selectedIdx = 0; selectedBitola = null;
    if(els.perfilSelect) els.perfilSelect.innerHTML = "";
    return;
  }

  let idx = selectedBitola ? currentResults.findIndex(r=>r.perfil.bitola === selectedBitola) : -1;
  if(idx < 0) idx = 0;
  selectedIdx = idx;
  selectedBitola = currentResults[idx].perfil.bitola;

  if(els.perfilSelect){
    els.perfilSelect.innerHTML = currentResults.map((r,i)=>
      `<option value="${i}"${i===idx ? " selected" : ""}>${i+1}. ${r.perfil.bitola} — ${fmt(r.perfil.massa,1)} kg/m${i===0 ? " (mais leve que atende)" : ""}</option>`
    ).join("");
    els.perfilSelect.value = String(idx);
  }

  els.cards.querySelectorAll(".card").forEach((card, i)=>{
    const escolhido = i === idx;
    card.classList.toggle("selected", escolhido);
    const btn = card.querySelector(".select-btn");
    if(btn){
      btn.textContent = escolhido ? "✓ Selecionado" : "Selecionar";
      btn.classList.toggle("on", escolhido);
      btn.setAttribute("aria-pressed", escolhido ? "true" : "false");
    }
  });
}

function setSelecionado(idx){
  const r = currentResults[idx];
  if(!r) return;
  selectedBitola = r.perfil.bitola;
  sincronizarSelecao();
}

if(els.perfilSelect){
  els.perfilSelect.addEventListener("change", ()=> setSelecionado(Number(els.perfilSelect.value)));
}

function perfilEscolhido(){ return currentResults[selectedIdx] || null; }

els.moreBtn.addEventListener("click", ()=>{ shown += 10; recalc(); });

els.cards.addEventListener("click", (ev)=>{
  const selBtn = ev.target.closest(".select-btn");
  if(selBtn){
    setSelecionado(Number(selBtn.dataset.selidx));
    return;
  }
  const minBtn = ev.target.closest(".card-min-btn");
  if(minBtn){
    const card = minBtn.closest(".card");
    const nowCompact = card.classList.toggle("compact");
    minBtn.textContent = nowCompact ? "⌃" : "⌄";
    minBtn.title = nowCompact ? "Expandir este perfil" : "Minimizar este perfil";
    return;
  }
  const btn = ev.target.closest(".smath-btn");
  if(btn){
    const idx = btn.dataset.idx;
    const statusEl = els.cards.querySelector(`[data-dlstatus-txt="${idx}"]`);
    const r = currentResults[idx];
    if(!r) return;
    const text = currentMode === "coluna" ? buildSMathExportColuna(r) : buildSMathExport(r);
    const slug = r.perfil.bitola.replace(/[^\w]+/g,"_");

    const copyToClipboard = async ()=>{
      try{
        if(navigator.clipboard && navigator.clipboard.writeText){
          await navigator.clipboard.writeText(text);
          return true;
        }
      }catch(e){}
      return false;
    };

    if(downloadsCap){
      setStatus(statusEl, "Salvando…", "");
      downloadsCap.save({ filename: `smath_${slug}.txt`, data: text })
        .then(()=> setStatus(statusEl, "Salvo!", "ok"))
        .catch((err)=> setStatus(statusEl, err && err.code==="declined" ? "Cancelado." : "Não foi possível salvar.", "err"));
    } else {
      copyToClipboard().then(ok=>{
        setStatus(statusEl, ok ? "Copiado!" : "Não foi possível copiar.", ok ? "ok" : "err");
      });
    }
    return;
  }
  const wordBtn = ev.target.closest(".word-btn");
  if(wordBtn){
    const idx = wordBtn.dataset.widx;
    const statusEl = els.cards.querySelector(`[data-dlstatus-txt="${idx}"]`);
    const r = currentResults[idx];
    if(!r) return;
    setStatus(statusEl, "Gerando documento…", "");
    buildWordBlobFor(r)
      .then(blob => saveFile(nomeArquivoRelatorio(r, "docx"), blob, statusEl))
      .catch(() => setStatus(statusEl, "Não foi possível gerar o documento.", "err"));
    return;
  }
  const pdfBtn = ev.target.closest(".pdf-btn");
  if(pdfBtn){
    const idx = Number(pdfBtn.dataset.pidx);
    setSelecionado(idx);
    printReportFor(idx);
    return;
  }
});

async function saveFile(filename, data, statusEl){
  if(downloadsCap){
    setStatus(statusEl, "Salvando…", "");
    try{
      await downloadsCap.save({ filename, data });
      setStatus(statusEl, "Salvo!", "ok");
    }catch(err){
      const msg = err && err.code==="declined" ? "Cancelado."
        : err && err.code==="extension_not_enabled" ? "Formato não habilitado nesta visualização."
        : "Não foi possível salvar.";
      setStatus(statusEl, msg, "err");
    }
    return;
  }
  if(!(window.claude && typeof window.claude.use === "function")){
    try{
      const blob = (data instanceof Blob) ? data : new Blob([data], {type:"text/plain"});
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url; a.download = filename;
      document.body.appendChild(a); a.click(); a.remove();
      setTimeout(()=> URL.revokeObjectURL(url), 2000);
      setStatus(statusEl, "Baixado!", "ok");
    }catch(e){
      setStatus(statusEl, "Não foi possível baixar.", "err");
    }
    return;
  }
  setStatus(statusEl, "Download indisponível nesta visualização.", "err");
}

function setStatus(el, text, kind){
  el.textContent = text;
  el.className = "dl-status" + (kind ? " " + kind : "");
  if(text) setTimeout(()=>{ if(el.textContent===text) el.textContent = ""; }, 4000);
}

let downloadsCap = null;
function refreshDownloadButtons(){
  if(els.dlDiagramBtn) els.dlDiagramBtn.hidden = !downloadsCap;
}
async function initDownloads(){
  try{
    if(window.claude && typeof window.claude.use === "function"){
      downloadsCap = await window.claude.use("downloads");
    }
  }catch(e){ downloadsCap = null; }
  refreshDownloadButtons();
}
initDownloads();

const DIAGRAM_EXPORT_STYLE = `
  .dg-beam{stroke:#16212B;}
  .dg-support{fill:#F3F6F7;stroke:#16212B;}
  .dg-hatch{stroke:#56697A;}
  .dg-load{stroke:#24557E;fill:#24557E;}
  .dg-reaction{stroke:#2E7D5B;fill:#2E7D5B;}
  .dg-moment-fill{fill:#DCE7EF;}
  .dg-moment-line{stroke:#24557E;fill:none;}
  .dg-shear-fill{fill:#F5E3D8;}
  .dg-shear-line{stroke:#C1592C;fill:none;}
  .dg-dim{stroke:#56697A;}
  .ps-steel{fill:#F3F6F7;stroke:#16212B;stroke-width:1.4;stroke-linejoin:round;}
  .ps-axis{stroke:#56697A;stroke-width:1;}
  .ps-axis-label{font-family:"IBM Plex Mono",monospace;font-size:11px;fill:#56697A;font-style:italic;}
  .ps-dim{stroke:#24557E;stroke-width:1;fill:none;}
  .ps-dim-label{font-family:"IBM Plex Mono",monospace;font-size:10.5px;fill:#24557E;}
  .dg-label{font-family:"IBM Plex Mono",monospace;}
  .dg-label.ink{fill:#16212B;}
  .dg-label.muted{fill:#56697A;}
  .dg-label.accent{fill:#24557E;}
  .dg-label.good{fill:#2E7D5B;}
  .dg-label.oxide{fill:#C1592C;}
`;

// Os SVG da tela usam variáveis de cor do tema; na exportação elas são substituídas
// pelas cores fixas de DIAGRAM_EXPORT_STYLE, para a imagem sair legível em papel.
function comEstiloExport(svgXml){
  return svgXml.replace(/<svg([^>]*)>/, `<svg$1><style>${DIAGRAM_EXPORT_STYLE}</style>`);
}
function dimensoesSvg(svgXml){
  const m = /viewBox="\s*[-\d.]+\s+[-\d.]+\s+([\d.]+)\s+([\d.]+)/.exec(svgXml);
  return m ? {w:parseFloat(m[1]), h:parseFloat(m[2])} : {w:640, h:300};
}
function diagramaSvgXml(){
  const svgEl = els.diagramWrap.querySelector("svg");
  if(!svgEl) return null;
  const clone = svgEl.cloneNode(true);
  clone.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  return new XMLSerializer().serializeToString(clone);
}

async function svgParaPng(svgXml, w, h, escala){
  const svgBlob = new Blob([svgXml], { type: "image/svg+xml;charset=utf-8" });
  const url = URL.createObjectURL(svgBlob);
  try{
    const img = new Image();
    // o timeout evita que o botão fique preso em "Gerando documento…" caso o navegador
    // não dispare nem load nem error ao rasterizar o SVG
    await new Promise((resolve, reject) => {
      const t = setTimeout(()=> reject(new Error("timeout ao rasterizar o SVG")), 8000);
      img.onload = ()=>{ clearTimeout(t); resolve(); };
      img.onerror = ()=>{ clearTimeout(t); reject(new Error("falha ao carregar o SVG")); };
      img.src = url;
    });
    const canvas = document.createElement("canvas");
    canvas.width = Math.round(w*escala); canvas.height = Math.round(h*escala);
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.scale(escala, escala);
    ctx.drawImage(img, 0, 0, w, h);
    return await new Promise(resolve => canvas.toBlob(resolve, "image/png"));
  } finally {
    URL.revokeObjectURL(url);
  }
}

async function diagramSvgToPngBlob(){
  const xml = diagramaSvgXml();
  if(!xml) return null;
  const {w, h} = dimensoesSvg(xml);
  return svgParaPng(comEstiloExport(xml), w, h, 2);
}

/* --- figuras do relatório Word --- */
// EMU (English Metric Units): 914400 por polegada. A largura útil da página A4 com as
// margens de 1134 twips usadas no documento é 9638 twips = 6,69 pol = 6.120.130 EMU.
const EMU_LARGURA_UTIL = 6120130;
const EMU_POR_PX = 9525;   // 96 dpi

function ajustarFigura(w, h, maxLargura, maxAltura){
  let cx = w*EMU_POR_PX, cy = h*EMU_POR_PX;
  const k = Math.min(maxLargura/cx, maxAltura/cy);
  if(k < 1){ cx *= k; cy *= k; }
  return {cx:Math.round(cx), cy:Math.round(cy)};
}

// Monta as imagens do relatório. Se o navegador não conseguir rasterizar um SVG, aquela
// figura simplesmente não entra — o documento sai completo, só sem o desenho.
async function coletarFiguras(r, model){
  const figuras = [];
  const adicionar = async (svgXml, legenda, maxAltura)=>{
    if(!svgXml) return;
    try{
      const {w, h} = dimensoesSvg(svgXml);
      const png = await svgParaPng(comEstiloExport(svgXml), w, h, 2);
      if(!png) return;
      const bytes = new Uint8Array(await png.arrayBuffer());
      const {cx, cy} = ajustarFigura(w, h, EMU_LARGURA_UTIL, maxAltura);
      figuras.push({nome:`imagem${figuras.length+1}.png`, relId:`rId${100+figuras.length}`, bytes, cx, cy, legenda});
    }catch(e){ /* segue sem a figura */ }
  };

  await adicionar(diagramaSvgXml(), model.legendaDiagrama, 4600000);
  await adicionar(buildProfileSvg(r.perfil),
    `Seção transversal do perfil ${r.perfil.bitola} — cotas em mm, eixos principais x-x e y-y`, 3200000);
  return figuras;
}

if(els.dlDiagramBtn){
  els.dlDiagramBtn.addEventListener("click", async ()=>{
    if(!downloadsCap) return;
    setStatus(els.dlDiagramStatus, "Gerando imagem…", "");
    try{
      const blob = await diagramSvgToPngBlob();
      if(!blob) throw new Error("sem diagrama");
      let filename;
      if(currentMode === "coluna"){
        const lxTxt = (parseFloat(els.colLx.value) || 0).toFixed(1).replace(".", "-");
        filename = `diagrama_coluna_lx${lxTxt}m.png`;
      } else {
        const tipo = document.querySelector('input[name="tipo"]:checked').value;
        const vaoTxt = (parseFloat(els.vao.value) || 0).toFixed(1).replace(".", "-");
        filename = `diagrama_${tipo}_vao${vaoTxt}m.png`;
      }
      await downloadsCap.save({ filename, data: blob });
      setStatus(els.dlDiagramStatus, "Salvo!", "ok");
    }catch(err){
      setStatus(els.dlDiagramStatus, err && err.code==="declined" ? "Cancelado." : "Não foi possível salvar.", "err");
    }
  });
}

[els.colLx, els.colKx, els.colLy, els.colKy, els.colCarga].forEach(el=>{
  el.addEventListener("input", recalc);
  el.addEventListener("change", recalc);
});

function recalc(){
  const modo = document.querySelector('input[name="modo"]:checked').value;
  if(modo === "coluna"){
    recalcColuna();
    return;
  }
  const tipo = document.querySelector('input[name="tipo"]:checked').value;
  const vaoM = parseFloat(els.vao.value) || 0;
  const cargaKN = parseFloat(els.carga.value) || 0;
  const cargaVarKN = parseFloat(els.cargaVar.value) || 0;
  const lbM = parseFloat(els.lb.value) || vaoM;
  const flechaVal = els.flecha.value ? parseFloat(els.flecha.value) : null;

  const cargaTf = cargaKN * TF_PER_KN;
  const cargaVarTf = cargaVarKN * TF_PER_KN;

  els.diagramWrap.innerHTML = buildDiagram(tipo, vaoM, cargaKN);

  const resultados = recomendar(vaoM, tipo, cargaTf, lbM, flechaVal, cargaVarTf);
  currentMode = "viga";
  render(resultados);
}

function recalcColuna(){
  const LxM = parseFloat(els.colLx.value) || 0;
  const LyM = parseFloat(els.colLy.value) || 0;
  const Kx = parseFloat(els.colKx.value) || 1;
  const Ky = parseFloat(els.colKy.value) || 1;
  const cargaKN = parseFloat(els.colCarga.value) || 0;
  const cargaTf = cargaKN * TF_PER_KN;

  els.diagramWrap.innerHTML = buildColumnDiagram(LxM, LyM, Kx, Ky, cargaKN);

  const resultados = recomendarColuna(LxM, LyM, Kx, Ky, cargaTf);
  currentMode = "coluna";
  renderColuna(resultados);
}

// tema claro/escuro (padrão: claro, com alternância manual e memória por navegador)
const themeBtn = document.getElementById("themeBtn");
const themeIcon = document.getElementById("themeIcon");
const themeText = document.getElementById("themeText");

function readSavedTheme(){
  try { return localStorage.getItem("vaoCargaTheme"); } catch(e){ return null; }
}
function saveTheme(v){
  try { localStorage.setItem("vaoCargaTheme", v); } catch(e){}
}
function applyTheme(theme){
  document.documentElement.setAttribute("data-theme", theme);
  if(theme === "dark"){
    themeIcon.textContent = "☾"; themeText.textContent = "Tela escura";
  } else {
    themeIcon.textContent = "☀"; themeText.textContent = "Tela clara";
  }
}
applyTheme(readSavedTheme() || "light");
themeBtn.addEventListener("click", ()=>{
  const current = document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
  const next = current === "dark" ? "light" : "dark";
  applyTheme(next);
  saveTheme(next);
});

// relatório para impressão / salvar como PDF
function buildPrintReportFor(r, idx, isRecommended){
  const p = r.perfil;
  const now = new Date();
  const dataStr = now.toLocaleDateString("pt-BR") + " " + now.toLocaleTimeString("pt-BR", {hour:"2-digit", minute:"2-digit"});

  let inputsHtml, memorialHtml;
  if(currentMode === "coluna"){
    inputsHtml = `<div class="pr-inputs">
      <div><b>Verificação:</b> Coluna — compressão axial</div>
      <div><b>Carga axial:</b> ${fmt(r.cargaAxialTf*KN_PER_TF,2)} kN</div>
      <div><b>Lx / Kx:</b> ${fmt(r.LxM,2)} m / ${fmt(r.Kx,2)} → KLx = ${fmt(r.KLxCm/100,2)} m</div>
      <div><b>Ly / Ky:</b> ${fmt(r.LyM,2)} m / ${fmt(r.Ky,2)} → KLy = ${fmt(r.KLyCm/100,2)} m</div>
    </div>`;
    memorialHtml = renderColunaMemorial(r, idx, {exportar:false});
  } else {
    const tipo = document.querySelector('input[name="tipo"]:checked').value;
    inputsHtml = `<div class="pr-inputs">
      <div><b>Verificação:</b> Viga — flexão</div>
      <div><b>Tipo de carregamento:</b> ${LOAD_PATTERNS[tipo].label}</div>
      <div><b>Vão / Lb:</b> ${fmt(r.vaoM,2)} m / ${fmt(r.LbM,2)} m</div>
      <div><b>Carga total / variável:</b> ${fmt(r.cargaUtilTf*KN_PER_TF,2)} kN / ${fmt(r.cargaVar*KN_PER_TF,2)} kN</div>
      ${r.limiteFlechaFrac ? `<div><b>Limite de flecha:</b> L/${r.limiteFlechaFrac}</div>` : ""}
    </div>`;
    memorialHtml = renderMemorial(r, idx, {exportar:false});
  }

  return `
    <div class="pr-header">
      <h1>Vão &amp; Carga</h1>
      <div class="pr-meta">Relatório de pré-dimensionamento — NBR 8800:2008 · gerado em ${dataStr}</div>
    </div>
    ${inputsHtml}
    <h2 class="pr-h2">Perfil ${isRecommended ? "recomendado" : "selecionado"}: ${p.bitola} — ${fmt(p.massa,1)} kg/m</h2>
    <div class="pr-diagram">${els.diagramWrap.innerHTML}</div>
    <div class="profile-fig">${buildProfileSvg(p)}</div>
    <div class="memorial-body">${memorialHtml}</div>
    <div class="pr-footer">Ferramenta de pré-dimensionamento — não substitui a verificação e a ART de um engenheiro responsável. Fonte dos dados de perfil: Tabela de Vãos e Cargas GERDAU, 5ª ed. 2018.</div>
  `;
}

function printReportFor(idx){
  const r = currentResults[idx];
  const target = document.getElementById("printReport");
  if(!r){
    target.innerHTML = `<p style="padding:20px;font-family:sans-serif;">Nenhum perfil disponível no momento — ajuste os parâmetros até haver ao menos um resultado.</p>`;
    window.print();
    return;
  }
  target.innerHTML = buildPrintReportFor(r, idx, idx===0);
  window.print();
}

function nomeArquivoRelatorio(r, ext){
  const slug = r.perfil.bitola.replace(/[^\w]+/g, "_").replace(/^_|_$/g, "");
  const medida = currentMode === "coluna"
    ? `KL${fmt(Math.max(r.KLxCm, r.KLyCm)/100, 1).replace(",", "-")}m`
    : `vao${fmt(r.vaoM, 1).replace(",", "-")}m`;
  return `memorial_${currentMode}_${slug}_${medida}.${ext}`;
}

// PDF: monta o relatório do perfil escolhido e chama a impressão do navegador
const printReportBtn = document.getElementById("printReportBtn");
if(printReportBtn){
  printReportBtn.addEventListener("click", ()=>{
    const r = perfilEscolhido();
    if(!r){ setStatus(els.reportStatus, "Nenhum perfil atende — ajuste os parâmetros.", "err"); return; }
    printReportFor(selectedIdx);
  });
}

// Word: mesmo memorial em .docx, editável no Word / LibreOffice / Google Docs
const wordReportBtn = document.getElementById("wordReportBtn");
if(wordReportBtn){
  wordReportBtn.addEventListener("click", ()=>{
    const r = perfilEscolhido();
    if(!r){ setStatus(els.reportStatus, "Nenhum perfil atende — ajuste os parâmetros.", "err"); return; }
    setStatus(els.reportStatus, "Gerando documento…", "");
    buildWordBlobFor(r)
      .then(blob => saveFile(nomeArquivoRelatorio(r, "docx"), blob, els.reportStatus))
      .catch(() => setStatus(els.reportStatus, "Não foi possível gerar o documento.", "err"));
  });
}

// init
els.cargaLabel.textContent = LOAD_PATTERNS.uniforme.cargaLabel + " (kN)";
els.loadHelp.textContent = LOAD_PATTERNS.uniforme.short;
onCoreChange();
