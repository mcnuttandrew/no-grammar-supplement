<!--
-@author:	Christian Pich
-@contact:	Christian dot Pich at uni-konstanz de
-@name:		spring.xsl
-@short:	Spring Embedder Style Sheet
-@version:	1.0
-@modified:	
-@param: x,y:	node coordinates
-	 l:	ideal length
-	 iter:	number of iterations
-	 width/height (pixel): drawing width/height 
-@desc: Computational style sheet that applies a popular
-force-directed layout algorithm to the graph.  The results is a copy of
-the input, enriched with layout information as data keys x and y for node
-coordinates.  The ideal edge length l, the number of iterations iter, and
-width/height of the drawing (in pixels) can be set as parameters.  Only
-for very small graphs.
-->

<xsl:stylesheet version="2.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:Math="java:java.lang.Math" exclude-result-prefixes="Math g"
    xmlns:g="http://graphml.graphdrawing.org/xmlns/graphml"
    xmlns="http://graphml.graphdrawing.org/xmlns/graphml"
    xpath-default-namespace="http://graphml.graphdrawing.org/xmlns/graphml">
  <xsl:output method="xml" indent="yes" encoding="iso-8859-1"/>
  <xsl:namespace-alias stylesheet-prefix="g" result-prefix="#default"/>

<xsl:param name="width">320</xsl:param>      <!-- drawing width -->
<xsl:param name="height">240</xsl:param>     <!-- drawing height -->
<xsl:param name="l">15</xsl:param>           <!-- ideal spring length -->
<xsl:param name="iter">1000</xsl:param>        <!-- number of iteration steps -->

<xsl:variable name="edges" select="/graphml/graph/edge"/>
<xsl:variable name="delta" select="0.01"/>   

<xsl:template match="desc|key|data|default"/>

<xsl:template match="graphml">
  <graphml>
    <xsl:copy-of select="key"/>
    <key id="x" for="node"/>
    <key id="y" for="node"/>
    <key id="width" for="graph"/>
    <key id="height" for="graph"/>
    <xsl:apply-templates select="graph"/>
  </graphml>
</xsl:template>

<xsl:template match="graph">
  <graph>
    <data key="width"><xsl:value-of select="$width"/></data>
    <data key="height"><xsl:value-of select="$height"/></data>
    <xsl:variable name="placement">
      <xsl:call-template name="springembedder">
        <xsl:with-param name="iter" select="$iter"/>
        <xsl:with-param name="nodes">
          <xsl:variable name="n" select="count(node)"/>
          <xsl:for-each select="node">            <!-- initial placement on an ellipse -->
            <p id="{@id}" x="{Math:cos(3.141592 * (2 * position() div $n)) * ($width div 2 - 10) + ($width div 2)}"
                          y="{Math:sin(3.141592 * (2 * position() div $n)) * ($height div 2 - 10) + ($height div 2)}"/>    
          </xsl:for-each>
        </xsl:with-param>
      </xsl:call-template>
    </xsl:variable>
    <xsl:for-each select="node">
      <node>
        <xsl:variable name="id" select="@id"/>
        <xsl:copy-of select="@*|data"/>
        <data key="x"><xsl:value-of select="$placement/p[@id=$id]/@x"/></data>
        <data key="y"><xsl:value-of select="$placement/p[@id=$id]/@y"/></data>
      </node>
    </xsl:for-each>
    <xsl:copy-of select="edge"/>
  </graph>
</xsl:template>

<xsl:template name="springembedder">
  <xsl:param name="nodes"/>                        <!-- old placement -->
  <xsl:param name="iter"/>                         <!-- number of iterations still to do -->
  <xsl:choose>
    <xsl:when test="$iter=0">                      <!-- terminate iteration? -->
      <xsl:copy-of select="$nodes"/>               <!-- yes: output placement -->
    </xsl:when>
    <xsl:otherwise>
      <xsl:variable name="placement">
        <xsl:for-each select="$nodes/p">           <!-- positions in old placement -->
          <xsl:variable name="v" select="."/>
          <xsl:variable name="net">                <!-- net force vector -->
            <xsl:for-each select="$nodes/p[@id!=$v/@id]">
              <xsl:variable name="u" select="."/>
              <!-- square of euclidean distance -->
              <xsl:variable name="d2" select="(@x - $v/@x)*(@x - $v/@x)
                                             +(@y - $v/@y)*(@y - $v/@y)"/>
              <xsl:variable name="c">              <!-- force coefficient -->
                <xsl:choose>                       <!-- v adjacent to u? -->
                  <xsl:when test="$edges[(@source=$v/@id and @target=$u/@id)
                                      or (@source=$u/@id and @target=$v/@id)]">
                    <xsl:value-of select="(Math:sqrt($d2) div $l)
                                         -($l * $l div $d2)"/>
                  </xsl:when>
                  <xsl:otherwise>
                     <xsl:value-of select="-1*($l * $l div $d2)"/>
                  </xsl:otherwise>
                </xsl:choose>
              </xsl:variable>                      <!-- force between v,u -->
              <p x="{(@x - $v/@x)*$c}" y="{(@y - $v/@y)*$c}"/>
            </xsl:for-each>
          </xsl:variable>                          <!-- move v -->
          <p id="{@id}" x="{@x + sum($net/p/@x) * $delta}"
                        y="{@y + sum($net/p/@y) * $delta}"/>
        </xsl:for-each>
      </xsl:variable>
      <xsl:call-template name="springembedder">
        <xsl:with-param name="iter" select="$iter - 1"/>
        <xsl:with-param name="nodes" select="$placement"/>
      </xsl:call-template>
    </xsl:otherwise>
  </xsl:choose>
</xsl:template>

</xsl:stylesheet>